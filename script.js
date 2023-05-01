//your JS code here. If required.

const timerElement = document.getElementById('timer');
 const dateElement = document.getElementById('date');
 
      setInterval(() => {
        // create a new date object
        const now = new Date();

        // get the current time
        const hours = now.getHours();
        const minutes = now.getMinutes();
        const seconds = now.getSeconds();

		// get the current date
        const month = now.getMonth() + 1;
        const day = now.getDate();
        const year = now.getFullYear();

        // format the date
        const dateString = `${month.toString().padStart(2, '0')}/${day.toString().padStart(2, '0')}/${year}`;
		dateElement.textContent = dateString;

        // format the time
        const timeString = ` ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

        // set the timer element's text content to the formatted time
        timerElement.textContent = timeString;
      }, 1000);
// var currentdate = new Date();