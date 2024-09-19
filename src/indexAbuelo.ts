import Employee, { Attribute } from "./components/myComponent/myComponent";
import { workers } from "./data/data";

class AppContainer extends HTMLElement {

    arrayEmployee: Employee[] = [];

    constructor() {
        super();
        this.attachShadow({mode:"open"})
        workers.forEach((element) => {
            const employeeCard = this.ownerDocument.createElement("worker-component") as Employee;
            employeeCard.setAttribute(Attribute.image, element.image);
            employeeCard.setAttribute(Attribute.name, element.name);
            employeeCard.setAttribute(Attribute.uid, `${Number(element.id)}`); //Convertir el number en string
            employeeCard.setAttribute(Attribute.age, `${Number(element.age)}`);
            employeeCard.setAttribute(Attribute.gender, element.gender);
            employeeCard.setAttribute(Attribute.area, element.jobDetails.area);
            employeeCard.setAttribute(Attribute.position, element.jobDetails.position);
            employeeCard.setAttribute(Attribute.timeincompany, `${(element.jobDetails.timeInCompany)}`);
            employeeCard.setAttribute(Attribute.experience, `${(element.jobDetails.experience)}`);
            this.arrayEmployee.push(employeeCard);
            console.log(this.arrayEmployee);
            
        });
    }

    connectedCallback() {
        this.render();
    }

    render(){
        if(this.shadowRoot){
            this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="../src/styles.css">
            
        <div><h1>Workers</h1></div>
            
            `;

            const container = document.createElement('div');
            container.classList.add('container');

            const filter = this.arrayEmployee.filter(element => Number(element.uid) % 2 === 0);

            filter.forEach((element) => {
                container.appendChild(element);
            });

            this.shadowRoot.appendChild(container);
        }
    }
}


customElements.define("app-container", AppContainer)