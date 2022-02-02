// Code goes here!
class ProjectInput{

    templateElement: HTMLTemplateElement;
    hostElement: HTMLDivElement;
    element:HTMLFormElement;
    titleInputElement: HTMLInputElement;
    descriptionInputElement: HTMLInputElement;
    peopleInputElement: HTMLInputElement;

    constructor(){
        this.templateElement = document.getElementById('project-input')! as HTMLTemplateElement;
        this.hostElement = document.getElementById('app')! as HTMLDivElement;
        const importedNode =  document.importNode(this.templateElement.content, true);
        this.element = importedNode.firstElementChild as HTMLFormElement;
        this.element.id ='user-input';
        this.titleInputElement = this.element.querySelector('#title') as HTMLInputElement;
        this. descriptionInputElement = this.element.querySelector('#description') as HTMLInputElement;
        this.peopleInputElement = this.element.querySelector('#people') as HTMLInputElement;
        this.submitHandler = this.submitHandler.bind(this);
        this.configure();
        this.attach();
    }
    private submitHandler(event: Event){
        event.preventDefault();
        const title = this.titleInputElement.value;   
        console.log(title);
        
    }
    private configure(){
        console.log(this);
        
        this.element.addEventListener('submit',this.submitHandler)
    }
    private attach() {
        this.hostElement.insertAdjacentElement('afterbegin', this.element);
    }
}
const prjInput = new ProjectInput();