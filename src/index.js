const menuToggle = document.querySelector('#menuToggle');
const iconMenu = document.querySelector('#iconMenu');
const iconCross = document.querySelector('#iconCross');
const mobileMenu = document.querySelector('#mobileMenu');
const navbar = document.querySelector('#navbar');
const education = document.querySelector('#education');
const experience = document.querySelector('#experience');
const projects = document.querySelector('#projects');

// Responsive Menu
menuToggle.addEventListener('click', function (e) {
  e.preventDefault();

  iconMenu.classList.toggle('hidden');
  iconCross.classList.toggle('hidden');
  mobileMenu.classList.toggle('hidden');
});

mobileMenu.addEventListener('click', function () {
  iconMenu.classList.toggle('hidden');
  iconCross.classList.toggle('hidden');
  mobileMenu.classList.toggle('hidden');
});

// Sticky navigation
document.addEventListener('scroll', function () {
  let lastScrollY = window.scrollY;

  if (lastScrollY > 0) {
    navbar.classList.add('bg-black-dark');
  } else if (lastScrollY == 0) {
    navbar.classList.remove('bg-black-dark');
  }
});

// Display Education
fetch('../data/education.json')
  .then((response) => response.json())
  .then((data) => {
    let educationHTML;
    educationHTML = data
      .map((degree) => {
        return `
        <ul class="mt-5">
          <li class="text-sm">${degree.start} • ${degree.end}</li>
          <li class="font-semibold text-yellow-dark">
            ${degree.field}
          </li>
          <li class="font-semibold">${degree.school}</li>
        </ul>
      `;
      })
      .slice(',')
      .join('');
    console.log(educationHTML);
    education.innerHTML = '';
    education.innerHTML = educationHTML;
  });

// Display Experience
fetch('../data/experience.json')
  .then((response) => response.json())
  .then((data) => {
    let experienceHTML;
    experienceHTML = data
      .map((job) => {
        return `
        <ul class="mt-5">
          <li class="text-sm">${job.start} • ${job.end}</li>
          <li class="font-semibold text-yellow-dark">
            ${job.position}
          </li>
          <li class="font-semibold">${job.company}</li>
        </ul>
      `;
      })
      .slice(',')
      .join('');
    console.log(experienceHTML);
    experience.innerHTML = '';
    experience.innerHTML = experienceHTML;
  });

// Display Projects
fetch('../data/portfolio.json')
  .then((response) => response.json())
  .then((portfolio) => {
    let projectHTML;
    projectHTML = portfolio
      .map((project) => {
        return `
        <div class="mt-5 tablet:mt-0 w-80">
          <div class="pt-[60%] relative rounded-lg overflow-hidden shadow-md">
            <img
              class="absolute z-10 top-0"
              src="${project.thumbnail}"
              alt="Medas Textile"
            />
          </div>
          <div>
            <h3 class="mt-2 text-xl font-semibold">${project.title}</h3>
            <ul class="flex flex-wrap">
              ${project.stack
                .map(
                  (technology) => `
                  <li class="mr-2">
                    <span class="mt-2 inline-block bg-gray text-black-dark px-2 rounded-xl text-sm">
                      ${technology}
                    </span>
                  </li>`
                )
                .slice(',')
                .join(' ')}
            </ul>
            <p class="mt-2">
              ${project.description}
            </p>
          </div>
          <div class="mt-2 text-black-dark flex">
            <div>
              ${
                project.hasOwnProperty('preview')
                  ? `<a class="flex items-center btn-main" href="${project.preview}">
                      <svg class="w-5 h-5 fill-black-dark">
                        <use xlink:href="./assets/svg/sprite.svg#eye"></use>
                      </svg>
                      &nbsp; Preview
                    </a>`
                  : ``
              }
            </div>
            <div>
              ${
                project.hasOwnProperty('repo')
                  ? `<a class="flex items-center ml-2 btn-main" href="${project.repo}" target="_blank">
                      <svg class="w-5 h-5 fill-black-dark">
                        <use xlink:href="./assets/svg/sprite.svg#github"></use>
                      </svg>
                      &nbsp; Github Repo
                    </a>`
                  : ``
              }
            </div>
          </div>
        </div>
      `;
      })
      .slice(',')
      .join('');
    projects.innerHTML = '';
    projects.innerHTML = projectHTML;
  });
