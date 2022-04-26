(() => {
  /* 
  Moving Pieces
    > Adjusting the hightlight under the active projects
    > Toggle between active Icon [grey icon -> colered icon, colored icon -> grey icon]
    > Sliding In/Out of Projects "slides"
 */

  //  this is wicked janky and could use a refactor or two but hey it works for now

  let projectButtons = document.querySelectorAll(".projectButton");

  let currentProject = "the-stand";

  projectButtons.forEach((project) => {
    project.addEventListener("mousedown", () => {
      let previousProject = currentProject;
      currentProject = project.dataset.projectvalue;
      return currentProject !== previousProject
        ? startAnimation(currentProject, previousProject)
        : null;
    });
  });

  const startAnimation = (current, previous) => {
    adjustUnderline(current);
    setTimeout(() => {
      adjustIconColors(current, previous);
    }, 1000);

    sectionAnimation(current, previous);
  };

  // Adjust the flex properties to animate  highlight bar
  const adjustUnderline = (current) => {
    switch (current) {
      case "for-writers":
        document
          .getElementById("highlight")
          .classList.add("changeShapeOfHighlight");
        document.getElementById("farLeft").style.flex = 0;
        document.getElementById("middleLeft").style.flex = 0;
        document.getElementById("middle").style.flex = 1;
        document.getElementById("middleRight").style.flex = 1;
        document.getElementById("farRight").style.flex = 1;
        setTimeout(() => {
          document
            .getElementById("highlight")
            .classList.remove("changeShapeOfHighlight");
        }, 1000);
        break;
      case "the-stand":
        document
          .getElementById("highlight")
          .classList.add("changeShapeOfHighlight");

        document.getElementById("farLeft").style.flex = 0;
        document.getElementById("middleLeft").style.flex = 1;
        document.getElementById("middle").style.flex = 1;
        document.getElementById("middleRight").style.flex = 1;
        document.getElementById("farRight").style.flex = 0;

        setTimeout(() => {
          document
            .getElementById("highlight")
            .classList.remove("changeShapeOfHighlight");
        }, 1000);

        break;
      case "hopwa":
        document
          .getElementById("highlight")
          .classList.add("changeShapeOfHighlight");

        document.getElementById("farLeft").style.flex = 1;
        document.getElementById("middleLeft").style.flex = 1;
        document.getElementById("middle").style.flex = 1;
        document.getElementById("middleRight").style.flex = 0;
        document.getElementById("farRight").style.flex = 0;
        setTimeout(() => {
          document
            .getElementById("highlight")
            .classList.remove("changeShapeOfHighlight");
        }, 1000);
        break;
      default:
        break;
    }
  };

  const adjustIconColors = (current, previous) => {
    swapForActive(current);
    swapForNonActive(previous);
  };

  // Maipulate dom to swap src attribute of img
  const swapForActive = (projectName) => {
    const elementImage = document.getElementById(projectName).children;
    let childImage = elementImage[0];

    switch (projectName) {
      case "the-stand":
        childImage.src = "images/projectIcons/theStandActive.png";
        break;
      case "for-writers":
        childImage.src = "images/projectIcons/forWritersActive.png";
        break;
      case "hopwa":
        childImage.src = "images/projectIcons/hopwaActive.png";
        break;
      default:
        break;
    }
  };

  // Maipulate dom to swap src attribute of img
  const swapForNonActive = (projectName) => {
    const elementImage = document.getElementById(projectName).children;
    let childImage = elementImage[0];

    switch (projectName) {
      case "the-stand":
        childImage.src = "images/projectIcons/theStandNonActive.png";
        break;
      case "for-writers":
        childImage.src = "images/projectIcons/forWritersNonActive.png";
        break;
      case "hopwa":
        childImage.src = "images/projectIcons/hopwaNonActive.png";
        break;
      default:
        break;
    }
  };

  const sectionAnimation = (currentProject, previousProject) => {
    removePreviousProjects(currentProject, previousProject);
  };

  // Apply class to animate with css keyframes
  const removePreviousProjects = (currentProject, previousProject) => {
    const previous = document.getElementById(`${previousProject}-container`);

    switch (previousProject) {
      case "for-writers":
        previous.classList.add("slideOffLeft");
        setTimeout(() => {
          previous.style.display = "none";
          previous.classList.remove("slideOffLeft");
          renderCurrentProject(currentProject, previousProject);
        }, 500);
        break;
      case "the-stand":
        if (currentProject === "for-writers") {
          previous.classList.add("slideOffRight");
          setTimeout(() => {
            previous.style.display = "none";
            previous.classList.remove("slideOffRight");
            renderCurrentProject(currentProject, previousProject);
          }, 500);
        } else {
          previous.classList.add("slideOffLeft");
          setTimeout(() => {
            previous.style.display = "none";
            previous.classList.remove("slideOffLeft");
            renderCurrentProject(currentProject, previousProject);
          }, 500);
        }

        break;

      case "hopwa":
        previous.classList.add("slideOffRight");
        setTimeout(() => {
          previous.style.display = "none";
          previous.classList.remove("slideOffRight");
          renderCurrentProject(currentProject, previousProject);
        }, 500);

      default:
        break;
    }
  };

  const renderCurrentProject = (currentProject, previousProject) => {
    const cProject = document.getElementById(`${currentProject}-container`);

    switch (currentProject) {
      case "for-writers":
        cProject.style.transform = "translateX(-100vw)";
        cProject.style.display = "flex";
        cProject.classList.add("slideInRight");
        setTimeout(() => {
          cProject.style.transform = "translateX(0)";
          cProject.classList.remove("slideInRight");
        }, 500);
        break;

      case "the-stand":
        if (previousProject === "for-writers") {
          cProject.style.transform = "translateX(100vw)";
          cProject.style.display = "flex";
          cProject.classList.add("slideInLeft");
          setTimeout(() => {
            cProject.style.transform = "translateX(0)";
            cProject.classList.remove("slideInLeft");
          }, 500);
        } else {
          cProject.style.transform = "translateX(-100vw)";
          cProject.style.display = "flex";
          cProject.classList.add("slideInRight");
          setTimeout(() => {
            cProject.style.transform = "translateX(0)";
            cProject.classList.remove("slideInRight");
          }, 500);
        }
        break;
      case "hopwa":
        cProject.style.transform = "translateX(100vw)";
        cProject.style.display = "flex";
        cProject.classList.add("slideInLeft");
        setTimeout(() => {
          cProject.style.transform = "translateX(0)";
          cProject.classList.remove("slideInLeft");
        }, 500);
        break;
      default:
        break;
    }
  };
})();
