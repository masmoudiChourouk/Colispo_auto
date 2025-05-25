const loginElements = { 
    loginURL: 'https://colispo.com/connection',
    titlecnx: '.mb-4',   //class ajoute un point .
    email: '#exampleInputEmail',    //ID ajout #
    password: '#exampleInputPassword',
    submit: 'button[type="submit"]',   //button
    moncompte: '#collasible-nav-dropdown',
    emailinput: "masmoudichourouk8@gmail.com",
    passwordinput: "04031997",
    invalidMessage:'.invalid-feedback',
};

export default loginElements;
const loginElements = { 
    loginURL: 'https://colispo.com/connection',
    titlecnx: '.mb-4',   
    email: '#exampleInputEmail',    
    password: '#exampleInputPassword',
    submit: 'button[type="submit"]',   
    moncompte: '#collasible-nav-dropdown',
    emailinput: "masmoudichourouk8@gmail.com",
    passwordinput: "04031997",
    invalidMessage:'.invalid-feedback',
    // Add a new property for better organization
    selectors: {
        titlecnx: '.mb-4',
        email: '#exampleInputEmail',
        password: '#exampleInputPassword',
        submit: 'button[type="submit"]',
        moncompte: '#collasible-nav-dropdown',
        invalidMessage: '.invalid-feedback'
    },
    // Add a new property for better organization
    credentials: {
        emailinput: "masmoudichourouk8@gmail.com",
        passwordinput: "04031997"
    }
};

export default loginElements;
git commit -m "push"