// Taskly JavaScript

let tasks = [];
let taskInstances = []; // Weekly task instances
let currentWeekOffset = 0; // 0 = this week, -1 = last week, 1 = next week
let expandedDay = null; // Track which day is expanded
let persons = []; // List of persons
let currentLanguage = localStorage.getItem('taskly_language') || 'en'; // Default language

// Translation function
function t(key) {
    return translations[currentLanguage][key] || key;
}

// Get translated day names
function getDayNames() {
    return [
        t('monday').substring(0, 3),
        t('tuesday').substring(0, 3),
        t('wednesday').substring(0, 3),
        t('thursday').substring(0, 3),
        t('friday').substring(0, 3),
        t('saturday').substring(0, 3),
        t('sunday').substring(0, 3)
    ];
}

// Update frequency label based on input value
function updateFrequencyLabel(input, label) {
    if (!input || !label) return;
    const value = parseInt(input.value) || 1;
    label.textContent = value === 1 ? t('time') : t('times');
}

// Update all translatable elements
function updateLanguage() {
    // Update elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        element.textContent = t(key);
    });
    
    // Update placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        element.placeholder = t(key);
    });
    
    // Update titles
    document.querySelectorAll('[data-i18n-title]').forEach(element => {
        const key = element.getAttribute('data-i18n-title');
        element.title = t(key);
    });
    
    // Update frequency labels
    updateFrequencyLabel(document.getElementById('frequencyAmount'), document.getElementById('frequencyLabel'));
    updateFrequencyLabel(document.getElementById('editFrequencyAmount'), document.getElementById('editFrequencyLabel'));
    
    // Re-render the calendar with translated day names
    renderTasks();
    
    // Save language preference
    localStorage.setItem('taskly_language', currentLanguage);
}

// Switch language
function switchLanguage(lang) {
    currentLanguage = lang;
    
    // Update active button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        }
    });
    
    updateLanguage();
}

document.addEventListener('DOMContentLoaded', function() {
    console.log('Taskly loaded successfully!');
    
    // Initialize language - set active button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        if (btn.getAttribute('data-lang') === currentLanguage) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
    
    // Initialize language
    updateLanguage();
    
    // Add language switcher event listeners
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            switchLanguage(lang);
        });
    });
    
    // Load tasks from localStorage
    loadTasks();
    
    // Populate person dropdowns
    populatePersonDropdowns();
    
    // Update week display
    updateWeekDisplay();
    
    // Get modal elements
    const modal = document.getElementById('taskModal');
    const editModal = document.getElementById('editTaskModal');
    const manageTasksBtn = document.getElementById('manageTasksBtn');
    const allTasksModal = document.getElementById('allTasksModal');
    const addNewTaskBtn = document.getElementById('addNewTaskBtn');
    const closeBtn = document.querySelector('.close');
    const closeEditBtn = document.querySelector('.close-edit');
    const taskForm = document.getElementById('taskForm');
    const editTaskForm = document.getElementById('editTaskForm');
    const deleteTaskBtn = document.getElementById('deleteTaskBtn');
    
    const prevWeekArrow = document.getElementById('prevWeekArrow');
    const nextWeekArrow = document.getElementById('nextWeekArrow');
    const todayBtn = document.getElementById('todayBtn');
    const resetWeekBtn = document.getElementById('resetWeekBtn');
    
    // Update Today button visibility
    function updateTodayButton() {
        if (currentWeekOffset === 0) {
            todayBtn.style.visibility = 'hidden';
            todayBtn.style.opacity = '0';
        } else {
            todayBtn.style.visibility = 'visible';
            todayBtn.style.opacity = '1';
        }
    }
    
    // Reset week's tasks functionality
    resetWeekBtn.addEventListener('click', function() {
        const confirmResetModal = document.getElementById('confirmResetModal');
        confirmResetModal.style.display = 'block';
    });
    
    // Confirm reset modal handlers
    const confirmResetModal = document.getElementById('confirmResetModal');
    const confirmResetBtn = document.getElementById('confirmResetBtn');
    const cancelResetBtn = document.getElementById('cancelResetBtn');
    
    confirmResetBtn.addEventListener('click', function() {
        confirmResetModal.style.display = 'none';
        resetWeekTasks();
    });
    
    cancelResetBtn.addEventListener('click', function() {
        confirmResetModal.style.display = 'none';
    });
    
    // Arrow button functionality
    prevWeekArrow.addEventListener('click', function() {
        currentWeekOffset--;
        updateWeekDisplay();
        updateTodayButton();
        renderTasks();
    });
    
    nextWeekArrow.addEventListener('click', function() {
        currentWeekOffset++;
        updateWeekDisplay();
        updateTodayButton();
        renderTasks();
    });
    
    // Today button functionality
    todayBtn.addEventListener('click', function() {
        currentWeekOffset = 0;
        updateWeekDisplay();
        updateTodayButton();
        renderTasks();
    });
    
    // Open manage tasks modal
    manageTasksBtn.addEventListener('click', function() {
        openAllTasksModal();
    });
    
    // Add new task from modal
    addNewTaskBtn.addEventListener('click', function() {
        modal.style.display = 'block';
    });
    
    // AI Suggestions
    document.getElementById('getAISuggestionsBtn').addEventListener('click', function() {
        showAISuggestions();
    });
    
    // Close all tasks modal
    document.querySelector('.close-all-tasks').addEventListener('click', function() {
        allTasksModal.style.display = 'none';
    });
    
    // Close modal when X is clicked
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });
    
    // Close edit modal when X is clicked
    closeEditBtn.addEventListener('click', function() {
        editModal.style.display = 'none';
    });
    
    // Frequency button handlers
    document.querySelectorAll('.frequency-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            // Get parent form to determine which hidden input to update
            const form = this.closest('form');
            const hiddenInput = form.querySelector('input[name="frequencyPeriod"], input[name="editFrequencyPeriod"]');
            
            // Remove active class from all buttons in this group
            this.closest('.frequency-buttons').querySelectorAll('.frequency-btn').forEach(b => {
                b.classList.remove('active');
            });
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Update hidden input value
            if (hiddenInput) {
                hiddenInput.value = this.dataset.period;
            }
        });
    });
    
    const frequencyAmountInput = document.getElementById('frequencyAmount');
    const frequencyLabel = document.getElementById('frequencyLabel');
    const editFrequencyAmountInput = document.getElementById('editFrequencyAmount');
    const editFrequencyLabel = document.getElementById('editFrequencyLabel');
    
    frequencyAmountInput.addEventListener('input', function() {
        updateFrequencyLabel(this, frequencyLabel);
    });
    
    editFrequencyAmountInput.addEventListener('input', function() {
        updateFrequencyLabel(this, editFrequencyLabel);
    });
    
    // Extract only emoji from emoji input fields
    const taskEmojiInput = document.getElementById('taskEmoji');
    const editTaskEmojiInput = document.getElementById('editTaskEmoji');
    
    function extractEmoji(input) {
        // Extract only the emoji (first character or emoji sequence) from the value
        const value = input.value.trim();
        if (value) {
            // Match emoji at the start and remove any text after it
            const emojiMatch = value.match(/^(\p{Emoji_Presentation}|\p{Emoji}\uFE0F)/u);
            if (emojiMatch) {
                input.value = emojiMatch[0];
            }
        }
    }
    
    taskEmojiInput.addEventListener('input', function() {
        extractEmoji(this);
    });
    
    taskEmojiInput.addEventListener('change', function() {
        extractEmoji(this);
    });
    
    editTaskEmojiInput.addEventListener('input', function() {
        extractEmoji(this);
    });
    
    editTaskEmojiInput.addEventListener('change', function() {
        extractEmoji(this);
    });
    
    // Close modal when clicking outside of it
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
        if (event.target === editModal) {
            editModal.style.display = 'none';
        }
        const managePersonsModal = document.getElementById('managePersonsModal');
        if (event.target === managePersonsModal) {
            managePersonsModal.style.display = 'none';
        }
        if (event.target === allTasksModal) {
            allTasksModal.style.display = 'none';
        }
        if (event.target === confirmResetModal) {
            confirmResetModal.style.display = 'none';
        }
    });
    
    // Manage persons button handlers
    document.getElementById('managePersonsBtn').addEventListener('click', function() {
        managePersons();
    });
    
    document.getElementById('manageEditPersonsBtn').addEventListener('click', function() {
        managePersons();
    });
    
    // Close manage persons modal
    document.querySelector('.close-manage-persons').addEventListener('click', function() {
        document.getElementById('managePersonsModal').style.display = 'none';
    });
    
    // Add person from modal
    document.getElementById('addPersonFromModalBtn').addEventListener('click', function() {
        addPersonFromModal();
    });
    
    // Allow pressing Enter to add person
    document.getElementById('newPersonInput').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            addPersonFromModal();
        }
    });
    
    // Handle form submission
    taskForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const taskData = {
            id: Date.now(),
            name: document.getElementById('taskName').value,
            emoji: document.getElementById('taskEmoji').value,
            description: document.getElementById('taskDescription').value,
            frequencyAmount: parseInt(document.getElementById('frequencyAmount').value),
            frequencyPeriod: document.getElementById('frequencyPeriod').value,
            person: document.getElementById('taskPerson').value,
            createdAt: new Date().toISOString()
        };
        
        console.log('New task created:', taskData);
        
        // Add task to array
        tasks.push(taskData);
        
        // Generate instances for this task
        generateTaskInstances(taskData);
        
        // Save to localStorage
        saveTasks();
        
        // Render tasks
        renderTasks();
        
        // Update the manage tasks modal if it's open
        if (allTasksModal.style.display === 'block') {
            openAllTasksModal();
        }
        
        // Reset form and close modal
        taskForm.reset();
        modal.style.display = 'none';
    });
    
    // Handle edit form submission
    editTaskForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const taskId = parseInt(document.getElementById('editTaskId').value);
        const task = tasks.find(t => t.id === taskId);
        
        if (task) {
            // Store old frequency data
            const oldFrequencyAmount = task.frequencyAmount;
            const oldFrequencyPeriod = task.frequencyPeriod;
            
            // Update task data
            task.name = document.getElementById('editTaskName').value;
            task.emoji = document.getElementById('editTaskEmoji').value;
            task.description = document.getElementById('editTaskDescription').value;
            task.frequencyAmount = parseInt(document.getElementById('editFrequencyAmount').value);
            task.frequencyPeriod = document.getElementById('editFrequencyPeriod').value;
            task.person = document.getElementById('editTaskPerson').value;
            
            // If frequency changed, regenerate instances
            if (oldFrequencyAmount !== task.frequencyAmount || oldFrequencyPeriod !== task.frequencyPeriod) {
                // Remove old instances
                taskInstances = taskInstances.filter(inst => inst.taskId !== taskId);
                // Generate new instances
                generateTaskInstances(task);
            }
            
            // Save and render
            saveTasks();
            renderTasks();
            
            // Close modal
            editModal.style.display = 'none';
            
            // Refresh all tasks modal if it's still open
            if (allTasksModal.style.display === 'block') {
                openAllTasksModal();
            }
        }
    });
    
    // Handle delete task
    deleteTaskBtn.addEventListener('click', function() {
        const taskId = parseInt(document.getElementById('editTaskId').value);
        
        if (confirm('Are you sure you want to delete this task? This will remove all instances.')) {
            // Remove task
            tasks = tasks.filter(t => t.id !== taskId);
            // Remove all instances
            taskInstances = taskInstances.filter(inst => inst.taskId !== taskId);
            
            // Save and render
            saveTasks();
            renderTasks();
            
            // Close modal
            editModal.style.display = 'none';
        }
    });
});

function populatePersonDropdowns() {
    const taskPersonSelect = document.getElementById('taskPerson');
    const editTaskPersonSelect = document.getElementById('editTaskPerson');
    
    // Keep the first option (Select a person) and add '--' for no person
    taskPersonSelect.innerHTML = '<option value="">Select a person</option><option value="--">--</option>';
    editTaskPersonSelect.innerHTML = '<option value="">Select a person</option><option value="--">--</option>';
    
    persons.forEach(person => {
        const option1 = document.createElement('option');
        option1.value = person;
        option1.textContent = person;
        taskPersonSelect.appendChild(option1);
        
        const option2 = document.createElement('option');
        option2.value = person;
        option2.textContent = person;
        editTaskPersonSelect.appendChild(option2);
    });
}

function removePerson(personName) {
    if (confirm(`Are you sure you want to remove "${personName}"?`)) {
        persons = persons.filter(p => p !== personName);
        savePersons();
        populatePersonDropdowns();
        
        // Remove person from all tasks that have it assigned
        tasks.forEach(task => {
            if (task.person === personName) {
                task.person = '--';
            }
        });
        saveTasks();
        renderTasks();
        
        // Close modal if no persons left
        if (persons.length === 0) {
            document.getElementById('managePersonsModal').style.display = 'none';
        }
    }
}

function managePersons() {
    if (persons.length === 0) {
        alert('No persons to manage. Add some persons first!');
        return;
    }
    
    const modal = document.getElementById('managePersonsModal');
    const personsListContainer = document.getElementById('personsListContainer');
    
    // Clear and populate the list
    personsListContainer.innerHTML = '';
    
    persons.forEach(person => {
        const personItem = document.createElement('div');
        personItem.className = 'person-item';
        personItem.innerHTML = `
            <span class="person-name">${person}</span>
            <button class="remove-person-btn" data-person="${person}">&times;</button>
        `;
        personsListContainer.appendChild(personItem);
    });
    
    // Add event listeners to remove buttons
    document.querySelectorAll('.remove-person-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const personName = this.getAttribute('data-person');
            removePerson(personName);
            // Refresh the list
            managePersons();
        });
    });
    
    modal.style.display = 'block';
}

function addNewPerson(selectId) {
    const personName = prompt('Enter the name of the person:');
    if (personName && personName.trim()) {
        const trimmedName = personName.trim();
        if (!persons.includes(trimmedName)) {
            persons.push(trimmedName);
            persons.sort(); // Keep alphabetically sorted
            savePersons();
            populatePersonDropdowns();
            
            // Set the newly added person as selected
            document.getElementById(selectId).value = trimmedName;
        } else {
            alert('This person already exists!');
        }
    }
}

function addPersonFromModal() {
    const input = document.getElementById('newPersonInput');
    const personName = input.value.trim();
    
    if (personName) {
        if (!persons.includes(personName)) {
            persons.push(personName);
            persons.sort(); // Keep alphabetically sorted
            savePersons();
            populatePersonDropdowns();
            
            // Clear input and refresh the modal list
            input.value = '';
            managePersons();
        } else {
            alert('This person already exists!');
            input.focus();
        }
    } else {
        alert('Please enter a person name!');
        input.focus();
    }
}

function savePersons() {
    localStorage.setItem('tasklyPersons', JSON.stringify(persons));
}

function loadPersons() {
    const saved = localStorage.getItem('tasklyPersons');
    if (saved) {
        persons = JSON.parse(saved);
    } else {
        // Default persons
        persons = ['Me', 'Partner', 'Family'];
        savePersons();
    }
}

function getWeekBounds(weekOffset = 0) {
    const now = new Date();
    const dayOfWeek = now.getDay();
    const diff = dayOfWeek === 0 ? -6 : 1 - dayOfWeek; // Monday as first day
    
    const monday = new Date(now);
    monday.setDate(now.getDate() + diff + (weekOffset * 7));
    monday.setHours(0, 0, 0, 0);
    
    const sunday = new Date(monday);
    sunday.setDate(monday.getDate() + 6);
    sunday.setHours(23, 59, 59, 999);
    
    return { start: monday, end: sunday };
}

function updateWeekDisplay() {
    const { start, end } = getWeekBounds(currentWeekOffset);
    const weekDatesEl = document.getElementById('weekDates');
    const weekLabelEl = document.querySelector('.week-label');
    
    const formatDate = (date) => {
        return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    };
    
    weekDatesEl.textContent = `${formatDate(start)} - ${formatDate(end)}`;
    
    if (currentWeekOffset === 0) {
        weekLabelEl.textContent = 'This Week';
    } else if (currentWeekOffset === -1) {
        weekLabelEl.textContent = 'Last Week';
    } else if (currentWeekOffset === 1) {
        weekLabelEl.textContent = 'Next Week';
    } else if (currentWeekOffset < 0) {
        weekLabelEl.textContent = `${Math.abs(currentWeekOffset)} Weeks Ago`;
    } else {
        weekLabelEl.textContent = `In ${currentWeekOffset} Weeks`;
    }
}

function generateTaskInstances(task) {
    // For monthly tasks, generate one instance per month
    if (task.frequencyPeriod === 'month' && task.frequencyAmount === 1) {
        // Generate instances for current month and next 2 months
        for (let monthOffset = 0; monthOffset <= 2; monthOffset++) {
            const now = new Date();
            const targetMonth = new Date(now.getFullYear(), now.getMonth() + monthOffset, 1);
            const monthKey = `${targetMonth.getFullYear()}-${String(targetMonth.getMonth() + 1).padStart(2, '0')}`;
            const instanceId = `${task.id}-${monthKey}`;
            
            // Only add if it doesn't exist
            if (!taskInstances.find(inst => inst.id === instanceId)) {
                taskInstances.push({
                    id: instanceId,
                    taskId: task.id,
                    monthKey: monthKey,
                    completed: false,
                    instanceNumber: 1
                });
            }
        }
    } else {
        // Generate instances for the next 4 weeks
        for (let weekOffset = 0; weekOffset <= 4; weekOffset++) {
            const { start } = getWeekBounds(weekOffset);
            const weekKey = start.toISOString().split('T')[0];
            
            let instancesNeeded = 0;
            
            // Calculate how many instances are needed for this week
            switch(task.frequencyPeriod) {
                case 'day':
                    instancesNeeded = task.frequencyAmount * 7;
                    break;
                case 'week':
                    instancesNeeded = task.frequencyAmount;
                    break;
                case 'month':
                    instancesNeeded = Math.ceil(task.frequencyAmount / 4);
                    break;
                case 'year':
                    instancesNeeded = Math.ceil(task.frequencyAmount / 52);
                    break;
            }
            
            // Create instances for this week
            for (let i = 0; i < instancesNeeded; i++) {
                const instanceId = `${task.id}-${weekKey}-${i}`;
                
                // Only add if it doesn't exist
                if (!taskInstances.find(inst => inst.id === instanceId)) {
                    taskInstances.push({
                        id: instanceId,
                        taskId: task.id,
                        weekKey: weekKey,
                        completed: false,
                        instanceNumber: i + 1
                    });
                }
            }
        }
    }
}

function loadTasks() {
    const savedTasks = localStorage.getItem('tasklyTasks');
    const savedInstances = localStorage.getItem('tasklyInstances');
    
    // Load persons
    loadPersons();
    
    if (savedTasks) {
        tasks = JSON.parse(savedTasks);
    }
    
    if (savedInstances) {
        taskInstances = JSON.parse(savedInstances);
    }
    
    // Generate instances for any tasks that don't have them yet
    tasks.forEach(task => {
        generateTaskInstances(task);
    });
    
    renderTasks();
}

function saveTasks() {
    localStorage.setItem('tasklyTasks', JSON.stringify(tasks));
    localStorage.setItem('tasklyInstances', JSON.stringify(taskInstances));
}

function resetWeekTasks() {
    const { start } = getWeekBounds(currentWeekOffset);
    const weekKey = start.toISOString().split('T')[0];
    
    // Get all instances for the current viewing week
    const weekInstances = taskInstances.filter(inst => inst.weekKey === weekKey);
    
    // Reset all instances for this week
    weekInstances.forEach(instance => {
        // Remove assignment
        delete instance.assignedDay;
        // Mark as incomplete
        instance.completed = false;
        // Remove completion timestamp
        delete instance.completedAt;
        delete instance.completedMonth;
    });
    
    // Save and re-render
    saveTasks();
    renderTasks();
    
    console.log(`Reset ${weekInstances.length} tasks for week ${weekKey}`);
}

function renderTasks() {
    const allTasksContainer = document.getElementById('allTasks');
    const daysGrid = document.getElementById('daysGrid');
    const unassignedTasksContainer = document.getElementById('unassignedTasks');
    const completedTasksContainer = document.getElementById('completedTasks');
    
    const { start, end } = getWeekBounds(currentWeekOffset);
    const weekKey = start.toISOString().split('T')[0];
    
    // Get current month key
    const now = new Date();
    const currentMonthKey = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`;
    
    // Get instances for current week
    let weekInstances = taskInstances.filter(inst => inst.weekKey === weekKey);
    
    // Add monthly instances for current month (if not completed)
    const monthlyInstances = taskInstances.filter(inst => 
        inst.monthKey === currentMonthKey && !inst.completed
    );
    
    // Combine weekly and monthly instances
    weekInstances = [...weekInstances, ...monthlyInstances];
    
    const unassignedInstances = weekInstances.filter(inst => !inst.completed && !inst.assignedDay);
    const completedInstances = weekInstances.filter(inst => inst.completed);
    
    // Render all tasks (master list)
    if (tasks.length === 0) {
        allTasksContainer.innerHTML = `<p class="empty-state">${t('noTasksYet')}</p>`;
    } else {
        allTasksContainer.innerHTML = tasks.map(task => createMasterTaskHTML(task)).join('');
    }
    
    // Render daily calendar
    renderDailyCalendar(weekInstances);
    
    // Render unassigned tasks
    if (unassignedInstances.length === 0) {
        unassignedTasksContainer.innerHTML = `<p class="empty-state">${t('noUnassignedTasks')}</p>`;
    } else {
        // Group instances by task ID
        const groupedTasks = {};
        unassignedInstances.forEach(instance => {
            if (!groupedTasks[instance.taskId]) {
                groupedTasks[instance.taskId] = [];
            }
            groupedTasks[instance.taskId].push(instance);
        });
        
        // Render grouped tasks
        unassignedTasksContainer.innerHTML = Object.values(groupedTasks).map(instances => {
            const task = tasks.find(t => t.id === instances[0].taskId);
            return createStackedTaskHTML(task, instances);
        }).join('');
    }
    
    // Render completed tasks for this week
    if (completedInstances.length === 0) {
        completedTasksContainer.innerHTML = `<p class="empty-state">${t('nothingCompleted')}</p>`;
    } else {
        completedTasksContainer.innerHTML = completedInstances.map(instance => {
            const task = tasks.find(t => t.id === instance.taskId);
            return createTaskInstanceHTML(task, instance);
        }).join('');
    }
    
    // Add event listeners
    addEventListeners();
    
    // Update score overview
    updateScoreOverview(weekInstances);
    
    // Update reset button visibility
    updateResetButtonVisibility(weekInstances);
    
    // Add drag-and-drop listeners to unassigned tasks container
    const unassignedContainer = document.getElementById('unassignedTasks');
    unassignedContainer.addEventListener('dragover', handleDragOver);
    unassignedContainer.addEventListener('drop', handleDropUnassign);
    unassignedContainer.addEventListener('dragleave', handleDragLeave);
    console.log('Added unassign drop listeners');
}

function updateResetButtonVisibility(weekInstances) {
    const resetBtn = document.getElementById('resetWeekBtn');
    
    // Check if there are any assigned or completed tasks for this week
    const hasAssignedOrCompletedTasks = weekInstances.some(inst => 
        inst.assignedDay || inst.completed
    );
    
    if (hasAssignedOrCompletedTasks) {
        resetBtn.classList.add('visible');
    } else {
        resetBtn.classList.remove('visible');
    }
}

function openAllTasksModal() {
    const modalContent = document.getElementById('allTasksModalContent');
    
    if (tasks.length === 0) {
        modalContent.innerHTML = `<p class="empty-state">${t('noTasksYet')}</p>`;
    } else {
        modalContent.innerHTML = tasks.map(task => createMasterTaskHTML(task)).join('');
        
        // Add event listeners to the tasks in the modal
        document.querySelectorAll('#allTasksModalContent .master-task').forEach(item => {
            item.addEventListener('click', function(e) {
                if (!e.target.classList.contains('edit-icon') && !e.target.classList.contains('delete-icon')) {
                    const taskId = parseInt(this.dataset.taskId);
                    openEditModal(taskId);
                }
            });
        });
        
        // Add event listeners for edit and delete icons
        document.querySelectorAll('#allTasksModalContent .edit-icon').forEach(icon => {
            icon.addEventListener('click', function(e) {
                e.stopPropagation();
                const taskId = parseInt(this.dataset.taskId);
                openEditModal(taskId);
            });
        });
        
        document.querySelectorAll('#allTasksModalContent .delete-icon').forEach(icon => {
            icon.addEventListener('click', function(e) {
                e.stopPropagation();
                const taskId = parseInt(this.dataset.taskId);
                deleteTask(taskId);
            });
        });
    }
    
    allTasksModal.style.display = 'block';
}

// AI Task Suggestions
const taskSuggestions = [
    { name: 'Clean the kitchen', emoji: '🍳', description: 'Wipe counters, wash dishes, mop floor', frequency: 2, period: 'week' },
    { name: 'Do laundry', emoji: '🧦', description: 'Wash, dry, and fold clothes', frequency: 2, period: 'week' },
    { name: 'Vacuum the house', emoji: '🧼', description: 'Vacuum all rooms and carpets', frequency: 1, period: 'week' },
    { name: 'Take out trash', emoji: '🗑️', description: 'Empty all trash bins', frequency: 2, period: 'week' },
    { name: 'Water plants', emoji: '🌱', description: 'Water all indoor and outdoor plants', frequency: 2, period: 'week' },
    { name: 'Clean bathroom', emoji: '🚿', description: 'Clean toilet, sink, shower, and mirror', frequency: 1, period: 'week' },
    { name: 'Change bed sheets', emoji: '🛌', description: 'Wash and change all bedding', frequency: 1, period: 'week' },
    { name: 'Mop floors', emoji: '🧹', description: 'Mop kitchen, bathroom, and hallway floors', frequency: 1, period: 'week' },
    { name: 'Dust furniture', emoji: '🪶', description: 'Dust all surfaces and shelves', frequency: 1, period: 'week' },
    { name: 'Clean windows', emoji: '🪟', description: 'Clean all windows inside and out', frequency: 1, period: 'month' },
    { name: 'Organize closets', emoji: '🧥', description: 'Sort and organize closet items', frequency: 1, period: 'month' },
    { name: 'Clean refrigerator', emoji: '🧊', description: 'Remove expired food, clean shelves', frequency: 2, period: 'month' },
    { name: 'Wash car', emoji: '🚗', description: 'Wash and vacuum the car', frequency: 2, period: 'month' },
    { name: 'Mow the lawn', emoji: '🌿', description: 'Mow grass and trim edges', frequency: 1, period: 'week' },
    { name: 'Weed the garden', emoji: '🪴', description: 'Pull weeds from garden beds', frequency: 1, period: 'week' },
    { name: 'Clean gutters', emoji: '🏠', description: 'Remove leaves and debris from gutters', frequency: 2, period: 'year' },
    { name: 'Wash dishes', emoji: '🍽️', description: 'Wash and put away all dishes', frequency: 7, period: 'week' },
    { name: 'Make the bed', emoji: '🛏️', description: 'Make bed and tidy bedroom', frequency: 7, period: 'week' },
    { name: 'Clean mirrors', emoji: '🪞', description: 'Clean all mirrors in the house', frequency: 1, period: 'week' },
    { name: 'Disinfect surfaces', emoji: '🧴', description: 'Disinfect doorknobs, switches, counters', frequency: 2, period: 'week' },
    { name: 'Empty dishwasher', emoji: '🍴', description: 'Unload and put away clean dishes', frequency: 7, period: 'week' },
    { name: 'Sort recycling', emoji: '♻️', description: 'Sort and take out recycling', frequency: 1, period: 'week' },
    { name: 'Clean oven', emoji: '🔥', description: 'Deep clean oven interior', frequency: 1, period: 'month' },
    { name: 'Defrost freezer', emoji: '❄️', description: 'Defrost and clean freezer', frequency: 2, period: 'year' },
    { name: 'Replace air filters', emoji: '💨', description: 'Replace HVAC air filters', frequency: 4, period: 'year' },
    { name: 'Check smoke detectors', emoji: '🔔', description: 'Test smoke and CO detectors', frequency: 1, period: 'month' },
    { name: 'Clean baseboards', emoji: '📏', description: 'Wipe down all baseboards', frequency: 1, period: 'month' },
    { name: 'Organize garage', emoji: '🏗️', description: 'Clean and organize garage space', frequency: 2, period: 'year' },
    { name: 'Wash pillows', emoji: '🛋️', description: 'Wash throw pillows and cushions', frequency: 1, period: 'month' },
    { name: 'Clean light fixtures', emoji: '💡', description: 'Dust and clean all light fixtures', frequency: 1, period: 'month' },
    { name: 'Organize pantry', emoji: '🥫', description: 'Sort and organize pantry items', frequency: 1, period: 'month' },
    { name: 'Clean under furniture', emoji: '🛋️', description: 'Vacuum and clean under beds and sofas', frequency: 1, period: 'month' },
    { name: 'Wipe cabinet doors', emoji: '🚪', description: 'Clean all cabinet and drawer fronts', frequency: 1, period: 'month' },
    { name: 'Clean shower curtain', emoji: '🛁', description: 'Wash or replace shower curtain', frequency: 1, period: 'month' },
    { name: 'Descale coffee maker', emoji: '☕', description: 'Descale and clean coffee machine', frequency: 1, period: 'month' },
    { name: 'Clean dishwasher', emoji: '🧽', description: 'Run cleaning cycle on dishwasher', frequency: 1, period: 'month' },
    { name: 'Wash doormats', emoji: '🚪', description: 'Clean all entrance mats', frequency: 1, period: 'month' },
    { name: 'Clean dryer vent', emoji: '🌪️', description: 'Remove lint from dryer vent', frequency: 2, period: 'year' },
    { name: 'Flip mattress', emoji: '🛌', description: 'Rotate or flip mattress', frequency: 2, period: 'year' },
    { name: 'Clean ceiling fans', emoji: '🌀', description: 'Dust all ceiling fan blades', frequency: 1, period: 'month' },
];

function showAISuggestions() {
    const container = document.getElementById('aiSuggestionsContainer');
    const list = document.getElementById('aiSuggestionsList');
    
    // Get suggestions that user doesn't already have
    const existingTaskNames = tasks.map(t => t.name.toLowerCase());
    const availableSuggestions = taskSuggestions.filter(s => 
        !existingTaskNames.includes(s.name.toLowerCase())
    );
    
    // Randomly select 5 suggestions
    const selectedSuggestions = availableSuggestions
        .sort(() => Math.random() - 0.5)
        .slice(0, 5);
    
    if (selectedSuggestions.length === 0) {
        list.innerHTML = '<p style="color: #666; text-align: center; padding: 10px;">You have all suggested tasks! 🎉</p>';
    } else {
        list.innerHTML = selectedSuggestions.map(suggestion => `
            <div class="suggestion-item" data-suggestion='${JSON.stringify(suggestion)}'>
                <span class="suggestion-emoji">${suggestion.emoji}</span>
                <div class="suggestion-text">
                    <div class="suggestion-name">${suggestion.name}</div>
                    <div class="suggestion-details">${suggestion.frequency}x/${suggestion.period}</div>
                </div>
            </div>
        `).join('');
        
        // Add click handlers
        document.querySelectorAll('.suggestion-item').forEach(item => {
            item.addEventListener('click', function() {
                const suggestion = JSON.parse(this.dataset.suggestion);
                applySuggestion(suggestion);
            });
        });
    }
    
    container.style.display = 'block';
}

function applySuggestion(suggestion) {
    document.getElementById('taskName').value = suggestion.name;
    document.getElementById('taskEmoji').value = suggestion.emoji;
    document.getElementById('taskDescription').value = suggestion.description;
    document.getElementById('frequencyAmount').value = suggestion.frequency;
    document.getElementById('frequencyPeriod').value = suggestion.period;
    
    // Update frequency label
    const label = document.getElementById('frequencyLabel');
    label.textContent = suggestion.frequency === 1 ? 'time' : 'times';
    
    // Update active frequency button
    document.querySelectorAll('#frequencyButtons .frequency-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.period === suggestion.period) {
            btn.classList.add('active');
        }
    });
    
    // Hide suggestions
    document.getElementById('aiSuggestionsContainer').style.display = 'none';
    
    // Focus on person field (next field to fill)
    document.getElementById('taskPerson').focus();
}

function createMasterTaskHTML(task) {
    return `
        <div class="task-item master-task" data-task-id="${task.id}">
            <div class="task-header">
                <span class="task-emoji-inline">${task.emoji}</span>
                <div class="task-name">${task.name}</div>
                <div class="task-actions">
                    <span class="edit-icon" data-task-id="${task.id}">✏️</span>
                    <span class="delete-icon" data-task-id="${task.id}">🗑️</span>
                </div>
            </div>
            ${task.description ? `<div class="task-description">${task.description}</div>` : ''}
            <div class="task-meta">
                <span class="task-badge task-frequency">⏰ ${task.frequencyAmount}x/${task.frequencyPeriod}</span>
                ${task.person && task.person !== '--' ? `<span class="task-badge task-person">👤 ${task.person}</span>` : ''}
            </div>
        </div>
    `;
}

function createTaskInstanceHTML(task, instance) {
    return `
        <div class="task-item completed-task ${instance.completed ? 'completed' : ''}">
            <div class="task-header">
                <div class="task-checkbox ${instance.completed ? 'checked' : ''}" data-instance-id="${instance.id}"></div>
                <span class="task-emoji-inline">${task.emoji}</span>
                <div class="task-name">${task.name}</div>
            </div>
        </div>
    `;
}

function toggleTaskInstanceCompletion(instanceId) {
    const instance = taskInstances.find(inst => inst.id === instanceId);
    if (instance) {
        instance.completed = !instance.completed;
        // Add completion timestamp
        if (instance.completed) {
            instance.completedAt = new Date().toISOString();
            
            // For monthly tasks, mark the month as completed
            if (instance.monthKey) {
                instance.completedMonth = instance.monthKey;
            }
        } else {
            delete instance.completedAt;
            delete instance.completedMonth;
        }
        saveTasks();
        renderTasks();
    }
}

function updateScoreOverview(weekInstances) {
    const completedTasks = weekInstances.filter(inst => inst.completed).length;
    const totalTasks = weekInstances.length;
    const completionRate = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;
    
    // Update stats
    document.getElementById('completedCount').textContent = completedTasks;
    document.getElementById('totalCount').textContent = totalTasks;
    document.getElementById('completionRate').textContent = completionRate + '%';
    
    // Update progress bar
    const progressBar = document.getElementById('progressBar');
    progressBar.style.width = completionRate + '%';
    progressBar.textContent = completionRate > 5 ? completionRate + '%' : '';
    
    // Update motivational quote based on completion rate
    const quoteElement = document.getElementById('motivationalQuote');
    let quote = '';
    
    if (totalTasks === 0) {
        quote = '🚀 Ready to conquer the week? Add some tasks to get started!';
    } else if (completionRate === 0) {
        quote = '🌟 Every journey begins with a single step. You got this!';
    } else if (completionRate < 25) {
        quote = '💪 Just getting started! Keep the momentum going!';
    } else if (completionRate < 50) {
        quote = '🔥 Great progress! You\'re building amazing habits!';
    } else if (completionRate < 75) {
        quote = '⭐ Crushing it! More than halfway there!';
    } else if (completionRate < 100) {
        quote = '🎉 So close! Finish strong, champion!';
    } else {
        quote = '🏆 Perfect week! You\'re absolutely unstoppable! 🎉';
    }
    
    quoteElement.textContent = quote;
}

function openEditModal(taskId) {
    const task = tasks.find(t => t.id === taskId);
    if (!task) return;
    
    // Populate form with task data
    document.getElementById('editTaskId').value = task.id;
    document.getElementById('editTaskName').value = task.name;
    document.getElementById('editTaskEmoji').value = task.emoji || '';
    document.getElementById('editTaskDescription').value = task.description || '';
    document.getElementById('editFrequencyAmount').value = task.frequencyAmount;
    document.getElementById('editFrequencyPeriod').value = task.frequencyPeriod;
    document.getElementById('editTaskPerson').value = task.person;
    
    // Update frequency label
    const editFrequencyLabel = document.getElementById('editFrequencyLabel');
    editFrequencyLabel.textContent = task.frequencyAmount === 1 ? 'time' : 'times';
    
    // Update frequency button active state
    const editFrequencyButtons = document.getElementById('editFrequencyButtons');
    editFrequencyButtons.querySelectorAll('.frequency-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.period === task.frequencyPeriod) {
            btn.classList.add('active');
        }
    });
    
    // Show modal - but keep all tasks modal open
    document.getElementById('editTaskModal').style.display = 'block';
}

function deleteTask(taskId) {
    const task = tasks.find(t => t.id === taskId);
    if (!task) return;
    
    if (confirm(`Are you sure you want to delete "${task.name}"? This will remove all instances.`)) {
        // Remove task
        tasks = tasks.filter(t => t.id !== taskId);
        // Remove all instances
        taskInstances = taskInstances.filter(inst => inst.taskId !== taskId);
        
        // Save and render
        saveTasks();
        renderTasks();
        
        // Refresh all tasks modal if it's still open
        if (allTasksModal.style.display === 'block') {
            openAllTasksModal();
        }
    }
}

function renderDailyCalendar(weekInstances) {
    const daysGrid = document.getElementById('daysGrid');
    const { start } = getWeekBounds(currentWeekOffset);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    const dayNames = getDayNames();
    const daysHTML = [];
    
    for (let i = 0; i < 7; i++) {
        const currentDay = new Date(start);
        currentDay.setDate(start.getDate() + i);
        const dayKey = currentDay.toISOString().split('T')[0];
        const isToday = currentDay.getTime() === today.getTime();
        const isExpanded = expandedDay === dayKey;
        
        // Get tasks for this day (including completed)
        const dayInstances = weekInstances.filter(inst => 
            inst.assignedDay === dayKey
        );
        
        // Count only incomplete tasks
        const incompleteCount = dayInstances.filter(inst => !inst.completed).length;
        
        // Create emoji icons for collapsed view
        const emojiIcons = dayInstances.map(instance => {
            const task = tasks.find(t => t.id === instance.taskId);
            const completedClass = instance.completed ? 'completed' : '';
            return `<span class="day-task-icon ${completedClass}">${task.emoji}</span>`;
        }).join('');
        
        // Create full task list for expanded view
        const tasksHTML = dayInstances.map(instance => {
            const task = tasks.find(t => t.id === instance.taskId);
            return createDayTaskHTML(task, instance);
        }).join('');
        
        daysHTML.push(`
            <div class="day-column ${isToday ? 'today' : ''} ${isExpanded ? 'expanded' : 'collapsed'}" data-day="${dayKey}">
                <div class="day-header" data-day="${dayKey}">
                    <span class="day-name">${dayNames[i]}</span>
                    <span class="day-date">${currentDay.getDate()}/${currentDay.getMonth() + 1}</span>
                    <span class="day-task-count">${incompleteCount}</span>
                </div>
                <div class="day-icons">${emojiIcons || `<span class="empty-day-text">${t('noTasks')}</span>`}</div>
                <div class="day-tasks" data-day="${dayKey}">
                    ${tasksHTML || `<p class="empty-state">${t('noTasksForThisDay')}</p>`}
                </div>
            </div>
        `);
    }
    
    daysGrid.innerHTML = daysHTML.join('');
    
    // Add click handlers to entire day column to toggle expand/collapse
    document.querySelectorAll('.day-column').forEach(dayColumn => {
        const dayKey = dayColumn.dataset.day;
        
        // Get tasks for this day
        const dayInstances = weekInstances.filter(inst => 
            inst.assignedDay === dayKey && !inst.completed
        );
        
        // Only make clickable if there are tasks
        if (dayInstances.length > 0) {
            dayColumn.addEventListener('click', function(e) {
                // Don't toggle if clicking on interactive elements in expanded view
                if (e.target.classList.contains('task-checkbox') || 
                    e.target.classList.contains('unassign-btn') ||
                    e.target.closest('.task-checkbox') ||
                    e.target.closest('.unassign-btn')) {
                    return;
                }
                
                // Toggle: if clicking the expanded day, collapse it; otherwise expand clicked day
                expandedDay = expandedDay === dayKey ? null : dayKey;
                renderTasks();
            });
        } else {
            // Remove cursor pointer for empty days
            dayColumn.style.cursor = 'default';
        }
    });
    
    // Add drag-and-drop listeners to day columns - MUST be after innerHTML is set
    document.querySelectorAll('.day-tasks').forEach(dayTasks => {
        dayTasks.addEventListener('dragover', handleDragOver);
        dayTasks.addEventListener('drop', handleDrop);
        dayTasks.addEventListener('dragleave', handleDragLeave);
        dayTasks.addEventListener('dragenter', function(e) {
            e.preventDefault();
            console.log('Drag enter on day:', dayTasks.dataset.day);
        });
        console.log('Added drop listeners to day:', dayTasks.dataset.day);
    });
    
    // Also add to day columns themselves as backup
    document.querySelectorAll('.day-column').forEach(dayColumn => {
        dayColumn.addEventListener('dragover', function(e) {
            e.preventDefault();
            e.dataTransfer.dropEffect = 'move';
        });
        dayColumn.addEventListener('drop', function(e) {
            e.preventDefault();
            e.stopPropagation();
            const dayKey = dayColumn.dataset.day;
            console.log('Drop on day column:', dayKey);
            const instance = taskInstances.find(inst => inst.id === draggedInstanceId);
            if (instance && dayKey) {
                instance.assignedDay = dayKey;
                saveTasks();
                renderTasks();
            }
        });
    });
}

function createDraggableTaskHTML(task, instance) {
    return `
        <div class="unassigned-task-item" draggable="true" data-instance-id="${instance.id}">
            <div class="unassigned-task-content">
                <span class="unassigned-task-emoji">${task.emoji}</span>
                <span class="unassigned-task-name">${task.name}</span>
            </div>
        </div>
    `;
}

function createStackedTaskHTML(task, instances) {
    const count = instances.length;
    
    if (count === 1) {
        // Single instance - render normally
        return createDraggableTaskHTML(task, instances[0]);
    } else {
        // Multiple instances - render as stack (show up to 5 layers)
        const layersToShow = Math.min(count, 5);
        return `
            <div class="task-stack" data-task-id="${task.id}">
                <div class="stack-layers">
                    ${Array.from({ length: layersToShow }, (_, index) => `
                        <div class="stack-layer"></div>
                    `).join('')}
                </div>
                <div class="unassigned-task-item stack-top" draggable="true" data-instance-id="${instances[0].id}">
                    <div class="unassigned-task-content">
                        <span class="unassigned-task-emoji">${task.emoji}</span>
                        <span class="unassigned-task-name">${task.name}</span>
                        <span class="stack-count">×${count}</span>
                    </div>
                </div>
            </div>
        `;
    }
}

function createDayTaskHTML(task, instance) {
    const completedClass = instance.completed ? 'completed' : '';
    const checkmarkClass = instance.completed ? 'checked' : '';
    return `
        <div class="day-task-item ${completedClass}" draggable="true" data-instance-id="${instance.id}">
            <div class="task-header">
                <div class="task-checkbox ${checkmarkClass}" data-instance-id="${instance.id}"></div>
                <span class="task-emoji-inline">${task.emoji}</span>
                <div class="day-task-name">${task.name}</div>
                <span class="unassign-btn" data-instance-id="${instance.id}">✕</span>
            </div>
        </div>
    `;
}

function addEventListeners() {
    // Checkboxes
    document.querySelectorAll('.task-checkbox').forEach(checkbox => {
        checkbox.addEventListener('click', function(e) {
            e.stopPropagation();
            const instanceId = this.dataset.instanceId;
            if (instanceId) {
                toggleTaskInstanceCompletion(instanceId);
            }
        });
    });
    
    // Edit icons
    document.querySelectorAll('.edit-icon').forEach(icon => {
        icon.addEventListener('click', function(e) {
            e.stopPropagation();
            const taskId = parseInt(this.dataset.taskId);
            openEditModal(taskId);
        });
    });
    
    // Delete icons
    document.querySelectorAll('.delete-icon').forEach(icon => {
        icon.addEventListener('click', function(e) {
            e.stopPropagation();
            const taskId = parseInt(this.dataset.taskId);
            deleteTask(taskId);
        });
    });
    
    // Master task items
    document.querySelectorAll('.master-task').forEach(item => {
        item.addEventListener('click', function(e) {
            if (!e.target.classList.contains('edit-icon') && !e.target.classList.contains('delete-icon')) {
                const taskId = parseInt(this.dataset.taskId);
                openEditModal(taskId);
            }
        });
    });
    
    // Draggable tasks
    document.querySelectorAll('[draggable="true"]').forEach(item => {
        item.addEventListener('dragstart', handleDragStart);
        item.addEventListener('dragend', handleDragEnd);
    });
    
    // Unassign buttons
    document.querySelectorAll('.unassign-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            const instanceId = this.dataset.instanceId;
            unassignTask(instanceId);
        });
    });
}

let draggedInstanceId = null;

function unassignTask(instanceId) {
    const instance = taskInstances.find(inst => inst.id === instanceId);
    if (instance) {
        delete instance.assignedDay;
        saveTasks();
        renderTasks();
    }
}

function handleDragStart(e) {
    draggedInstanceId = this.dataset.instanceId;
    this.classList.add('dragging');
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', this.innerHTML);
    console.log('Drag started:', draggedInstanceId);
}

function handleDragEnd(e) {
    this.classList.remove('dragging');
    document.querySelectorAll('.drag-over').forEach(el => el.classList.remove('drag-over'));
    console.log('Drag ended');
}

function handleDragOver(e) {
    e.preventDefault();
    e.stopPropagation();
    e.dataTransfer.dropEffect = 'move';
    
    console.log('Drag over event on:', e.currentTarget.dataset.day);
    
    // Find the day column or day tasks container
    const dayTasks = e.currentTarget;
    const dayColumn = dayTasks.closest('.day-column');
    if (dayColumn) {
        dayColumn.classList.add('drag-over');
    }
}

function handleDragLeave(e) {
    const dayColumn = e.currentTarget.closest('.day-column');
    if (dayColumn && !dayColumn.contains(e.relatedTarget)) {
        dayColumn.classList.remove('drag-over');
    }
}

function handleDrop(e) {
    console.log('🎯 DROP EVENT FIRED ON:', e.currentTarget);
    
    if (e.stopPropagation) {
        e.stopPropagation();
    }
    if (e.preventDefault) {
        e.preventDefault();
    }
    
    const dayKey = e.currentTarget.dataset.day;
    const instance = taskInstances.find(inst => inst.id === draggedInstanceId);
    
    console.log('Drop event fired:', { dayKey, draggedInstanceId, instance });
    console.log(instance);
    
    if (instance && dayKey) {
        const task = tasks.find(t => t.id === instance.taskId);
        const dayDate = new Date(dayKey);
        const dayName = dayDate.toLocaleDateString('en-US', { weekday: 'long' });
        
        console.log(`✅ Task "${task.name}" was dragged to ${dayName} (${dayKey})`);
        
        instance.assignedDay = dayKey;
        saveTasks();
        renderTasks();
    }
    
    document.querySelectorAll('.drag-over').forEach(el => el.classList.remove('drag-over'));
}

function handleDropUnassign(e) {
    console.log('🎯 DROP UNASSIGN EVENT FIRED!');
    
    if (e.stopPropagation) {
        e.stopPropagation();
    }
    if (e.preventDefault) {
        e.preventDefault();
    }
    
    const instance = taskInstances.find(inst => inst.id === draggedInstanceId);
    
    console.log('Unassign drop event fired:', { draggedInstanceId, instance });
    
    if (instance) {
        const task = tasks.find(t => t.id === instance.taskId);
        console.log(`↩️ Task "${task.name}" was dragged back to Unassigned Tasks`);
        
        delete instance.assignedDay;
        saveTasks();
        renderTasks();
    }
}
