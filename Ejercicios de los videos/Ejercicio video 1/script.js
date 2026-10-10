//Select all relevant DOM elements for the wizard form
const steps = document.querySelectorAll('.form-step');
const nextBtns = document.querySelectorAll('.next-btn');
const prevBtns = document.querySelectorAll('.prev-btn');
const progress = document.getElementById('progress');
const progressSteps = document.querySelectorAll('.progress-step');
const progressStepsBtn = document.querySelectorAll('.progress-step-btn');
const form = document.getElementById('formWizard');

let formStepIndex = 0;

function validateStep(stepIdx) {
    const step = document.querySelectorAll(".form-step")[stepIdx];
    const requiredInputs = step.querySelectorAll("input[required]");
    let Valid = true;
    requiredInputs.forEach(input => {
        if (!input.value.trim()) {
            input.style.borderColor = "#f44336";
            Valid = false;
        }else {
            input.style.borderColor = "";
        }
    });
    // show error message if not valid
    let errorDiv = step.querySelector("#form-error");
    if (!Valid) {
        if (!errorDiv) {
            errorDiv = document.createElement("div");
            errorDiv.id = "form-error";
            errorDiv.textContent = "Please fill out all required fields.";
            errorDiv.style.color = "#f44336";
            errorDiv.style.marginBottom = "10px";
            step.insertBefore(errorDiv, step.firstChild);
        }
    } else if (errorDiv) {
        errorDiv.remove();
}
return Valid;
}

//Handle "next" button click
nextBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        if (validateStep(formStepIndex)) {
            formStepIndex++;
            updateFormSteps();
            updateProgressbar();
        } 
    });
});

//Handle "Back" button click
prevBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        formStepIndex--;
        updateFormSteps();
        updateProgressbar();
    });
});

//Allow navigagation by clicking on progress steps
progressStepsBtn.forEach(btn => {
    btn.addEventListener("click", () => {
        if (validateStep(formStepIndex)) {
            const step = parseInt(btn.getAttribute("data-step"));
            formStepIndex = step;
            updateFormSteps();
            updateProgressbar();
        }
    });
});

//validate before submitting the form
form.addEventListener("submit", function (e) {
    if (!validateStep(formStepIndex)) {
        e.preventDefault();
    }
});

// show the correct step in the form
function updateFormSteps() {
    steps.forEach((step, index) => {
        step.classList.toggle("active", index === formStepIndex);
    });
}

// update the progress bar and dots
function updateProgressbar() {
    progressSteps.forEach((step, index) => {
        if (index <= formStepIndex) {
            step.classList.add("active");
        } else {
            step.classList.remove("active");
        }
    });
    progress.style.width = 
    ((formStepIndex) / (progressSteps.length - 1)) * 100 + "%";
}

//initial display of the first step
updateFormSteps();