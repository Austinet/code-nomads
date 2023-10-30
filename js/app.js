const courseTabs = document.querySelector(".course-tabs ul");
const courseOutline = document.querySelector(".course-outline");
const courseOutlineMobile = document.querySelector(".course-outline-mobile");

// Courses database
const courses = [
  {
    id: 1,
    name: "FRONTEND",
    description: "Frontend Development",
    duration: "34HRS",
    days: "2 weeks",
    active: true,
    number_of_lectures: "14/28",
    sub_contents: [
      {
        name: "HTML",
        number_of_lectures: 5,
        duration: "24:30 Mins",
      },
      {
        name: "CSS",
        number_of_lectures: 8,
        duration: "24:30 Mins",
      },
      {
        name: "React",
        number_of_lectures: 2,
        duration: "30:10 Mins",
      },
      {
        name: "Angular",
        number_of_lectures: 10,
        duration: "24:30 Mins",
      },
    ],
  },
  {
    id: 2,
    name: "DATABASE",
    description: "Database",
    duration: "34HRS",
    days: "2 weeks",
    number_of_lectures: "14/28",
    sub_contents: [
      {
        name: "SQL Server",
        number_of_lectures: 5,
        duration: "24:30 Mins",
      },
      {
        name: "Postgres SQL",
        number_of_lectures: 8,
        duration: "24:30 Mins",
      },
      {
        name: "Oracle",
        number_of_lectures: 2,
        duration: "30:10 Mins",
      },
      {
        name: "Mongo DB",
        number_of_lectures: 10,
        duration: "24:30 Mins",
      },
    ],
  },
  {
    id: 3,
    name: "CLOUD",
    description: "Cloud",
    duration: "34HRS",
    days: "2 weeks",
    number_of_lectures: "14/28",
    sub_contents: [
      {
        name: "Azure",
        number_of_lectures: 5,
        duration: "24:30 Mins",
      },
      {
        name: "DevOps",
        number_of_lectures: 8,
        duration: "24:30 Mins",
      },
      {
        name: "Git",
        number_of_lectures: 2,
        duration: "30:10 Mins",
      },
      {
        name: "Github",
        number_of_lectures: 10,
        duration: "24:30 Mins",
      },
    ],
  },
  {
    id: 4,
    name: "SERVICES",
    duration: "34HRS",
    description: "Service",
    days: "2 weeks",
    number_of_lectures: "14/28",
    sub_contents: [
      {
        name: ".NET",
        number_of_lectures: 5,
        duration: "24:30 Mins",
      },
      {
        name: "Core Web API",
        number_of_lectures: 8,
        duration: "24:30 Mins",
      },
      {
        name: "C#",
        number_of_lectures: 2,
        duration: "30:10 Mins",
      },
    ],
  },
  {
    id: 5,
    name: "AI",
    description: "Artificial Intelligence",
    duration: "34HRS",
    days: "2 weeks",
    number_of_lectures: "14/28",
    sub_contents: [
      {
        name: "Artificial Intelligence",
        number_of_lectures: 5,
        duration: "24:30 Mins",
      },
      {
        name: "Prompt Engineering",
        number_of_lectures: 8,
        duration: "24:30 Mins",
      },
    ],
  },
];

// Renders the tabs dynamically according to the selected course
const renderTab = (courses) => {
  let tabs = "";

  courses.forEach((course) => {
    const { id, name, active } = course;
    tabs += `
    <li>
       <button type="button" onClick="viewCourse(${id})" 
       class="${active ? "active-tab" : ""}
       ">${name}</button>
    </li>
    `;
  });

  courseTabs.innerHTML = tabs;
};

// Renders the course outline dynamically according to the selected course on large screens
const renderCourseOutline = (courses) => {
  const outlineChange = courses.find((course) => course.active === true);
  const { description, days, number_of_lectures, duration, sub_contents } = outlineChange;

  courseOutline.innerHTML = ` 
  <div class="courses-header">
    <h2>${description}</h2>
    <div>
        <ul>
            <li>
                <img src="assets/icons/calendar-03.svg" alt="calendar">
                <p>${days}</p>
            </li>
            <li>
                <img src="assets/icons/video-02.svg" alt="video">
                <p>${number_of_lectures}</p>
            </li>
            <li>
                <img src="assets/icons/clock-03.svg" alt="clock">
                <p>${duration} Duration</p>
            </li>
        </ul>
    </div>
</div>
<div class="sub-content">
    <ul>
    ${sub_contents
      .map(
        (sub_content) =>
          `<li class="course-content">
        <div class="course-title-container">
            <img src="assets/icons/drop-down.svg" alt="drop down">
            <p>${sub_content.name}</p>
        </div>
        <div>
            <ul>
                <li>
                    <img src="assets/icons/video-02.svg" alt="video">
                    <p>${sub_content.number_of_lectures} Lectures</p>
                </li>
                <li>
                    <img src="assets/icons/clock-03.svg" alt="clock">
                    <p>${sub_content.duration}</p>
                </li>
            </ul>
        </div>
    </li> `
      )
      .join("")}
    </ul>
</div>
`;
};

// Renders the course outline dynamically according to the selected course on mobile
const renderCourseOutlineMobile = (courses) => {
  let outlines = "";

  courses.forEach((course) => {
    const {
      id,
      description,
      days,
      number_of_lectures,
      duration,
      sub_contents,
      active
    } = course;
    outlines += `
    <li>
        <div class="courses-header">
          <h2 class="">
              <span>${description}</span>
              <button class="flex-center-center ${
                active ? "rotate" : ""
              }" onclick="viewCourse(${id})">
                <img src="assets/icons/drop-down.svg" alt="drop down">
              </button>
          </h2>
      </div>
      <div class="${active ? "" : "close"}">
      <div class="courses-header">
          <ul>
              <li>
                  <img src="assets/icons/calendar-03.svg" alt="calendar">
                  <p>${days}</p>
              </li>
              <li>
                  <img src="assets/icons/video-02.svg" alt="video">
                  <p>${number_of_lectures}</p>
              </li>
              <li>
                  <img src="assets/icons/clock-03.svg" alt="clock">
                  <p>${duration} Duration</p>
              </li>
          </ul>
      </div>
        <div class="sub-content">
            <ul>
                ${sub_contents
                  .map(
                    (sub_content) =>
                      `<li class="course-content">
                    <div class="course-title-container">
                        <img src="assets/icons/drop-down.svg" alt="drop down">
                        <p>${sub_content.name}</p>
                    </div>
                    <div>
                        <ul>
                            <li>
                                <img src="assets/icons/video-02.svg" alt="video">
                                <p>${sub_content.number_of_lectures} Lectures</p>
                            </li>
                            <li>
                                <img src="assets/icons/clock-03.svg" alt="clock">
                                <p>${sub_content.duration}</p>
                            </li>
                        </ul>
                    </div>
                </li> `
                  )
                  .join("")}
            </ul>
        </div>
      </div>
    </li>
    `;
  });

  courseOutlineMobile.innerHTML = outlines;
};

//Switch courses and tabs
const viewCourse = (id) => {
  const courseChange = courses.map((course) => {
    if (course.id === id) {
      return { ...course, active: true };
    } else {
      return { ...course, active: false };
    }
  });
  renderTab(courseChange);
  renderCourseOutline(courseChange);
  renderCourseOutlineMobile(courseChange);
};

//Render on load by default
renderTab(courses);
renderCourseOutline(courses);
renderCourseOutlineMobile(courses);
