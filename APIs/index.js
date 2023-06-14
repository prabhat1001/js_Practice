const btn = document.querySelector('#btn');

const newUser ={
    name: 'John',
    job: 'Software Developer'
};


const clickHandler = async () => {

    // for error handeling we use try and catch block

    try{
        const res = await fetch('https://reqres.in/api/users');

        const data = await res.json();
        if(!res.ok){
            console.log('Problem with the resource');
            return;
        }
        console.log(data);
    }
    catch(err){
        console.log(err);
    }
    
};

btn.addEventListener('click', clickHandler);