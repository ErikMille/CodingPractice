class Question {
  constructor(title, text) {
    this.title=title;
    this.text =text;
    this.likes=0;
  }

  render(){
      this.element=document.createElement('div');
      this.element.className="container";
      this.element.innerHTML=(`
      <div id="title" class="title">${this.title}</div>
      <div id="body" class="body">${this.text}</div>
      <div id="likecount">0</div>
      <button id="like" class="digit-btn">+</button>
      <button id="dislike" class="digit-btn">-</button>
      `);
    this.element.querySelector('#like').addEventListener(
      'click', 
      () => {
        this.likes++;
        this.update();
      });
    this.element.querySelector('#dislike').addEventListener(
      'click', 
      () => {
        this.likes--;
        this.update();
      });
  }
  mount(parent){
    this.render();
    parent.appendChild(this.element);
    this.update();
  }
  update(){
    this.element.querySelector('#likecount').textContent=this.likes;
  }
}
