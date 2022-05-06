window.onload = () => {

	const keys = [
	  {code: 'Backquote', en: '`', enShift: '~', ru: 'ё', ruShift: 'Ё'},
	  {code: 'Digit1', en: '1', enShift: '!', ru: '1', ruShift: '!'},
	  {code: 'Digit2', en: '2', enShift: '@', ru: '2', ruShift: '"'},
	  {code: 'Digit3', en: '3', enShift: '#', ru: '3', ruShift: '№'},
	  {code: 'Digit4', en: '4', enShift: '$', ru: '4', ruShift: ';'},
	  {code: 'Digit5', en: '5', enShift: '%', ru: '5', ruShift: '%'},
	  {code: 'Digit6', en: '6', enShift: '^', ru: '6', ruShift: ':'},
	  {code: 'Digit7', en: '7', enShift: '&', ru: '7', ruShift: '?'},
	  {code: 'Digit8', en: '8', enShift: '*', ru: '8', ruShift: '*'},
	  {code: 'Digit9', en: '9', enShift: '(', ru: '9', ruShift: '('},
	  {code: 'Digit0', en: '0', enShift: ')', ru: '0', ruShift: ')'},
	  {code: 'Minus', en: '-', enShift: '_', ru: '-', ruShift: '_'},
	  {code: 'Equal', en: '=', enShift: '+', ru: '=', ruShift: '+'},
	  {code: 'Backspace', specKey: true},
  
	  {code: 'Tab', specKey: true},  
	  {code: 'KeyQ', en: 'q', enShift: 'Q', ru: 'й', ruShift: 'Й'},
	  {code: 'KeyW', en: 'w', enShift: 'W', ru: 'ц', ruShift: 'Ц'},
	  {code: 'KeyE', en: 'e', enShift: 'E', ru: 'у', ruShift: 'У'},
	  {code: 'KeyR', en: 'r', enShift: 'R', ru: 'к', ruShift: 'К'},
	  {code: 'KeyT', en: 't', enShift: 'T', ru: 'е', ruShift: 'Е'},
	  {code: 'KeyY', en: 'y', enShift: 'Y', ru: 'н', ruShift: 'Н'},
	  {code: 'KeyU', en: 'u', enShift: 'U', ru: 'г', ruShift: 'Г'},
	  {code: 'KeyI', en: 'i', enShift: 'I', ru: 'ш', ruShift: 'Ш'},
	  {code: 'KeyO', en: 'o', enShift: 'O', ru: 'щ', ruShift: 'Щ'},
	  {code: 'KeyP', en: 'p', enShift: 'P', ru: 'з', ruShift: 'З'},
	  {code: 'BracketLeft', en: '[', enShift: '{', ru: 'х', ruShift: 'Х'},
	  {code: 'BracketRight', en: ']', enShift: '}', ru: 'ъ', ruShift: 'Ъ'},
	  {code: 'Backslash', en: '\\', enShift: '|', ru: '\\', ruShift: '/'},
	  {code: 'Delete', specKey: true, name: 'Del' },
  
	  {code: 'CapsLock', specKey: true },  
	  {code: 'KeyA', en: 'a', enShift: 'A', ru: 'ф', ruShift: 'Ф'},
	  {code: 'KeyS', en: 's', enShift: 'S', ru: 'ы', ruShift: 'Ы'},
	  {code: 'KeyD', en: 'd', enShift: 'D', ru: 'в', ruShift: 'В'},
	  {code: 'KeyF', en: 'f', enShift: 'F', ru: 'а', ruShift: 'А'},
	  {code: 'KeyG', en: 'g', enShift: 'G', ru: 'п', ruShift: 'П'},
	  {code: 'KeyH', en: 'h', enShift: 'H', ru: 'р', ruShift: 'Р'},
	  {code: 'KeyJ', en: 'j', enShift: 'J', ru: 'о', ruShift: 'О'},
	  {code: 'KeyK', en: 'k', enShift: 'K', ru: 'л', ruShift: 'Л'},
	  {code: 'KeyL', en: 'l', enShift: 'L', ru: 'д', ruShift: 'Д'},
	  {code: 'Semicolon', en: ';', enShift: ':', ru: 'ж', ruShift: 'Ж'},
	  {code: 'Quote', en: "'", enShift: '"', ru: 'э', ruShift: 'Э'},
	  {code: 'Enter', specKey: true},
  
	  {code: 'ShiftLeft', specKey: true, name: 'Shift'},
	  {code: 'KeyZ', en: 'z', enShift: 'Z', ru: 'я', ruShift: 'Я'},
	  {code: 'KeyX', en: 'x', enShift: 'X', ru: 'ч', ruShift: 'Ч'},
	  {code: 'KeyC', en: 'c', enShift: 'C', ru: 'с', ruShift: 'С'},
	  {code: 'KeyV', en: 'v', enShift: 'V', ru: 'м', ruShift: 'М'},
	  {code: 'KeyB', en: 'b', enShift: 'B', ru: 'и', ruShift: 'И'},
	  {code: 'KeyN', en: 'n', enShift: 'N', ru: 'т', ruShift: 'Т'},
	  {code: 'KeyM', en: 'm', enShift: 'M', ru: 'ь', ruShift: 'Ь'},
	  {code: 'Comma', en: ',', enShift: '<', ru: 'б', ruShift: 'Б'},
	  {code: 'Period', en: '.', enShift: '>', ru: 'ю', ruShift: 'Ю'},
	  {code: 'Slash', en: '/', enShift: '?', ru: '.', ruShift: ','},
	  {code: 'ArrowUp', en: '↑', enShift: '↑', ru: '↑', ruShift: '↑'},
	  {code: 'ShiftRight', specKey: true, name: 'Shift'},
  
	  {code: 'ControlLeft', specKey: true, name: 'Ctrl'},
	  {code: 'MetaLeft', specKey: true, name: 'Win'},
	  {code: 'AltLeft', specKey: true, name: 'Alt'},
	  {code: 'Space', specKey: true, name: '', en: ' ', ru: ' '},
	  {code: 'AltRight', specKey: true, name: 'Alt'},
	  {code: 'ArrowLeft', en: '←', enShift: '←', ru: '←', ruShift: '←'},
	  {code: 'ArrowDown', en: '↓', enShift: '↓', ru: '↓', ruShift: '↓'},
	  {code: 'ArrowRight', en: '→', enShift: '→', ru: '→', ruShift: '→'},
	  {code: 'ControlRight', specKey: true, name: 'Ctrl'}
	];
		  
	const h1 = document.createElement('h1');
	h1.innerHTML = 'Клавиатура';
	document.body.append(h1);

	const textarea = document.createElement('textarea');
	textarea.classList.add('textarea');
	document.body.append(textarea);

	const keyboard = document.createElement('div');
	keyboard.classList.add('keyboard');
	document.body.append(keyboard);

	let addKeysDom = function (objKey) {
        let key = document.createElement('div');
        key.className = objKey.code;
        key.innerText = objKey.en || objKey.name || objKey.code;
        return keyboard.append(key);
	}
  
	keys.forEach(objKey => addKeysDom(objKey));
  
	class Button {
        constructor(element) {
            this.code = element.code;
            this.en = element.en;
            this.enShift = element.enShift;
            this.ru = element.ru;
            this.ruShift = element.ruShift;
        }
        
        addKey (event) {
            let localObjKey = {}
            keys.forEach(function (obj) {
                if (obj.code === event.code) {
                    let btn = document.querySelector(`.${obj.code}`);
                    localObjKey = obj;
            
                    if (event.type === 'keydown') {
                        btn.classList.add('active');
                    } 
                    
                    if (event.type === 'keyup') {
                        btn.classList.remove('active');
                    }
                }
            });
            
            if (event.type === 'keydown') {
                if (!localObjKey.specKey) {
                    this.#addText(localObjKey);
                }

                if (localObjKey.specKey) {
                    this.#handleSpecKey(localObjKey);
                }
            }

            event.preventDefault();
	    }
  
        mouseClick(event) {
            keys.forEach((obj) => {
                if (event.target.className === obj.code) {
                    if (!obj.specKey) {
                        this.#addText(obj);
                    }

                    if (obj.specKey) {
                        this.#handleSpecKey(obj);
                    }
                }
            });

            event.preventDefault();
	    }

        #addText(obj) {
            const cursorPosition = textarea.selectionStart;
            const startText = textarea.value.slice(0, cursorPosition);
            const endText = textarea.value.slice(cursorPosition, textarea.value.length);
            textarea.value = startText + obj.en + endText;
            textarea.setSelectionRange(cursorPosition + 1, cursorPosition + 1);
        }

        #removeText() {
            const cursorPosition = textarea.selectionStart;
            const startText = textarea.value.slice(0, cursorPosition - 1);
            const endText = textarea.value.slice(cursorPosition, textarea.value.length);
            textarea.value = startText + endText;

            textarea.setSelectionRange(cursorPosition - 1, cursorPosition - 1);
        }

        #handleSpecKey(obj) {
            switch(obj.code) {
                case 'Backspace': {
                    if (!textarea.value) {
                        return;
                    }

                    this.#removeText();
                    break;
                }

                case 'Space': {
                    this.#addText(obj);
                    break;
                }
            }
        }
	}
	
    let button = new Button(keys);
  
    keyboard.addEventListener("click", (event) => {
        button.mouseClick(event);
    });
  
    document.addEventListener('keydown', (event) => { 
        button.addKey(event);
    });

    document.addEventListener('keyup', (event) => { 
        button.addKey(event);
    });
}