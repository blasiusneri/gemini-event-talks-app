document.addEventListener('DOMContentLoaded', () => {
  const scheduleElement = document.getElementById('schedule');
  const searchInput = document.getElementById('searchInput');
  let talks = [];

  // Fetch talk data from the API
  fetch('/api/talks')
    .then(response => response.json())
    .then(data => {
      talks = data;
      renderSchedule(talks);
    });

  // Search functionality
  searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredTalks = talks.filter(talk => 
      talk.category.some(cat => cat.toLowerCase().includes(searchTerm))
    );
    renderSchedule(filteredTalks);
  });

  // Render the schedule
  function renderSchedule(talksToRender) {
    scheduleElement.innerHTML = '';
    let currentTime = new Date();
    currentTime.setHours(10, 0, 0, 0);

    talksToRender.forEach((talk, index) => {
      // Add lunch break after the 3rd talk
      if (index === 3) {
        const lunchBreakTime = formatTime(currentTime);
        currentTime.setHours(currentTime.getHours() + 1);
        const lunchBreakElement = createScheduleItem(lunchBreakTime, 'Lunch Break', null, null, null, null, true);
        scheduleElement.appendChild(lunchBreakElement);
      }
      
      const talkTime = formatTime(currentTime);
      const talkElement = createScheduleItem(talkTime, talk.title, talk.speakers, talk.category, talk.description, talk.duration);
      scheduleElement.appendChild(talkElement);

      // Add duration of talk and transition time
      currentTime.setMinutes(currentTime.getMinutes() + talk.duration + 10);
    });
  }

  // Create a schedule item element
  function createScheduleItem(time, title, speakers, category, description, duration, isLunch = false) {
    const item = document.createElement('div');
    item.classList.add('schedule-item');

    if(isLunch){
        item.classList.add('lunch-break');
    }

    const timeElement = document.createElement('div');
    timeElement.classList.add('time');
    timeElement.textContent = time;

    const details = document.createElement('div');
    details.classList.add('details');

    const titleElement = document.createElement('h2');
    titleElement.textContent = title;
    details.appendChild(titleElement);

    if (speakers) {
      const speakersElement = document.createElement('div');
      speakersElement.classList.add('speakers');
      speakersElement.textContent = speakers.join(', ');
      details.appendChild(speakersElement);
    }

    if (category) {
        const categoryContainer = document.createElement('div');
        category.forEach(cat => {
            const categoryElement = document.createElement('span');
            categoryElement.classList.add('category');
            categoryElement.textContent = cat;
            categoryContainer.appendChild(categoryElement);
        });
        details.appendChild(categoryContainer);
    }

    if (description) {
      const descriptionElement = document.createElement('div');
      descriptionElement.classList.add('description');
      descriptionElement.textContent = description;
      details.appendChild(descriptionElement);
    }

    item.appendChild(timeElement);
    item.appendChild(details);
    return item;
  }

  // Format time to HH:MM AM/PM
  function formatTime(date) {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  }
});
