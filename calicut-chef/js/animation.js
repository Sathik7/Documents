

const observer = new IntersectionObserver((entries) =>{
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add('show');
        }
        else {
            entry.target.classList.remove('show');
        }

    });
});


const floatingleftelements = document.querySelectorAll('.floatingleft');
floatingleftelements.forEach((el) => observer.observe(el));

// floating top to down

const observers = new IntersectionObserver((entries) =>{
    entries.forEach((entry) => {
        // console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add('show');
        }
        else {
            entry.target.classList.remove('show');
        }

    });
});


const floatingtopelements = document.querySelectorAll('.floatingtop');
floatingtopelements.forEach((el) => observers.observe(el));

//floating down to top


const observers1 = new IntersectionObserver((entries) =>{
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add('show');
        }
        else {
            entry.target.classList.remove('show');
        }

    });
});



const floatingbottomelements = document.querySelectorAll('.floatingbottom');
floatingbottomelements.forEach((el) => observers1.observe(el));


//floating right

const observers2 = new IntersectionObserver((entries) =>{
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add('show');
        }
        else {
            entry.target.classList.remove('show');
        }

    });
});


const floatingrightelements = document.querySelectorAll('.floatingright');
floatingrightelements.forEach((el) => observers2.observe(el));



//fade in

    // // Function to handle the intersection of the elements
    // function handleIntersection(entries, observer) {
    //     entries.forEach(entry => {
    //       if (entry.isIntersecting) {
    //         entry.target.style.opacity = 1;
    //         observer.unobserve(entry.target);
    //       }
    //     });
    //   }
  
      // Set up the Intersection Observer
    //   const observer3 = new IntersectionObserver(handleIntersection, { threshold: 0.5 });
  
    //   // Observe each element with the "fade-element" class
    //   const fadeElements = document.querySelectorAll('.fade-element');
    //   fadeElements.forEach(element => observer3.observe(element));


    const observers3 = new IntersectionObserver((entries) =>{
        entries.forEach((entry) => {
            console.log(entry)
            if (entry.isIntersecting){
                entry.target.classList.add('show');
            }
            else {
                entry.target.classList.remove('show');
            }
    
        });
    });
    
    
    const fadeinelements = document.querySelectorAll('.fadein');
    fadeinelements.forEach((el) => observers3.observe(el));