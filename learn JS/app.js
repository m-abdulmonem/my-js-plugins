



function $(selector) {
    let self = {};
    self.selector = selector;
    self.element = document.querySelector(self.selector);

    self.text = function (text) {
        return text === undefined ?  self.element.textContent : self.element.textContent = text;
    };
    self.val = function(value){
        return (value !== undefined ? self.element.value = value : self.element.value);
    };
    self.html = function (html) {
      return html === undefined ? self.element : self.element.innerHTML = html;
    };
    self.after = function(elem){

    };
    self.before = function (elem){

    };
    self.append = function (elem) {
        self.element.innerHTML  = self.element.innerHTML + elem;
    };
    self.prepend = function (elem) {
        self.element.innerHTML = elem + self.element.innerHTML
    };
    self.attr = function (attr,value) {
        if (!value)return self.element.getAttribute(attr);
        self.element.setAttribute(attr,value);
        return self
    };

    // events

    self.on = function (event,callback) {
        self.element['on' + event] = callback;
        return self;
    };
    
    
    self.click = function (callback) {
        self.element.onclick = callback;
        return self
    };

    self.dblclick = function (callback) {
        self.element.ondblclick = callback;
        return self
    };

    self.alert = function (message,type,buttons = []) {

    };

    return self;
}
