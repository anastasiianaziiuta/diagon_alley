//*Зміна іконок у шапці

let door = document.querySelector('.js-door'),
    book = document.querySelector('.js-book'),
    changeDoor = document.querySelector('.js-change-door'),
    changeBook = document.querySelector('.js-change-book');

    function changeIcon(i,e){
        i.addEventListener('mouseenter',() => {
            if (e === changeDoor ) {
                e.setAttribute('xlink:href', 'images/icons/sprite.svg#open-door');
            } else {
                e.setAttribute('xlink:href', 'images/icons/sprite.svg#open-book');
            }

        });
        i.addEventListener('mouseout', () => {
            if (e === changeDoor ) {
                e.setAttribute('xlink:href', 'images/icons/sprite.svg#closed-door');
            } else {
                e.setAttribute('xlink:href', 'images/icons/sprite.svg#closed-book');
            }
        });
    }
    changeIcon(door, changeDoor);
    changeIcon(book, changeBook);

//*Каталог

let catalogStart = document.querySelector('#js-catalog'),
    catalogCategories = document.querySelector('#js-categories'),
    categories = document.querySelector('.js-catalog-items'),
    subCategories = document.querySelectorAll('.js-subcategory');

    function hideCatalog(){
        catalogCategories.classList.remove('show');
        subCategories.forEach( (elem) => {
            elem.classList.remove('show');
        });
    }
    catalogStart.addEventListener('click', () => {
        catalogStart.classList.toggle('active');
        if ( catalogStart.classList.contains('active') ) {
            hideCatalog();
        } else {
            catalogCategories.classList.add('show');
        }
    });

    catalogCategories.addEventListener('click', (e) => {
        if ( e.target.tagName!=='DIV' ) {
            return false;
        } else {
            hideCatalog();
        }
    });
    categories.addEventListener('click', (e) => {
        if(e.target.tagName!== 'LI') {
            return false;
        } else {
            let filterClass = e.target.dataset['f'];
            subCategories.forEach( (elem) => {
                elem.classList.add('show');
                if (!elem.classList.contains(filterClass)){
                    elem.classList.remove('show');
                }
            });
        }
    });

    //*Модальні вікна

let registrBtn = document.querySelector('.js-registr'),
    enterBtn = document.querySelector('.js-entering'),
    overlayModal = document.querySelector('.js-overlay'),
    closing = document.querySelectorAll('.js-close'),
    signUp = document.querySelector('.js-signup'),
    signIn = document.querySelector('.js-signin'),
    thanksMassege = document.querySelector('.js-thanks'),
    signUpBtn = document.querySelector('.js-signup-btn'),
    signInBtn = document.querySelector('.js-signin-btn');

    function openModail(b) {
        b.addEventListener('click', () => {
            overlayModal.classList.add('js-modal-active');
           if (b.classList.contains('js-registr')) {
               signUp.classList.add('js-modal-active');
           } else if (b.classList.contains('js-entering')) {
               signIn.classList.add('js-modal-active');
           }
        });
    }
    openModail(registrBtn);
    openModail(enterBtn);

    function closeModal() {
        overlayModal.classList.remove('js-modal-active');
        if(signUp.classList.contains('js-modal-active')) {
            signUp.classList.remove('js-modal-active');
        } else if (signIn.classList.contains('js-modal-active')) {
            signIn.classList.remove('js-modal-active');
        } else  if (thanksMassege.classList.contains('js-modal-active')) {
            thanksMassege.classList.remove('js-modal-active');
        }
    }
    // closeModal(closing);
    closing.forEach((el) => {
       el.addEventListener('click', () =>{
           closeModal();
       });
    });
    // closeModal(overlayModal);


    function pushButton(c) {
        c.addEventListener('click', () => {
            if(c.classList.contains('js-signup-btn')) {
                signUp.classList.remove('js-modal-active');
                thanksMassege.classList.add('js-modal-active');
            } else if (c.classList.contains('js-signin-btn')) {
                overlayModal.classList.remove('js-modal-active');
                signIn.classList.remove('js-modal-active');
                window.location.href =  'https://www.facebook.com/';
            }
        });
    }
    pushButton(signUpBtn);
    pushButton(signInBtn);
