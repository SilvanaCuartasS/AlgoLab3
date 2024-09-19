
//estandarizar las variables y llamarlas en el abuelo luego
export enum Attribute {
    "image" = "image",
    "name" = "name",
    "uid" = "uid",
    "age" = "age",
    "gender" = "gender",
    "area" = "area",
    "position" =  "position",
    "timeincompany" =  "timeincompany",
    "experience" = "experience"
}

class Employee extends HTMLElement {

    image?: string;
    name?: string;
    uid?: number;
    age?: number;
    gender?: string;
    area?: string;
    position?: string;
    timeincompany?: number;
    experience?: number;
   

    static get observedAttributes(){
        return Object.keys(Attribute); //  return ["image","uid","age".....]
    }

    constructor() {
        super();
        this.attachShadow ({mode: "open"});
    }

    attributeChangedCallback(propName:Attribute,oldValue: string | undefined,newValue: string | undefined){

        switch(propName){
            case Attribute.uid:
                this.uid = newValue ? Number(newValue) : undefined;
            break;
            case Attribute.age:
                this.age = newValue ? Number(newValue) : undefined;
            break;

            case Attribute. timeincompany:
                this.timeincompany = newValue ? Number(newValue) : undefined;
            break;

            case Attribute. experience:
                this.experience = newValue ? Number(newValue) : undefined;
            break;

            default: 
            this[propName] = newValue;
            break;
        }
        
        this.render();
    }

    connectedCallback() {
        this.render();
    }

    render() {

        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = 
            `
            <section>
            <img src="${this.image || 'No hay imagen'}" alt="imagen de: ${this.name}">
            <h1>${this.name || 'Not have a name'}</h1>
            <p>ID for one our users: ${this.uid || 'Not have an ID'}</p>
            <p>Age: ${this.age || 'Not have an age'}</p>
            <p>Gender: ${this.gender || 'Not have a gender'}</p>
            <p>Area: ${this.area || 'Not have an area'}</p>
            <p>Position: ${this.position || 'Not have a position'}</p>
            <p>Time in company: ${this.timeincompany || 'Not have a time in company'}</p>
            <p>Experience: ${this.experience || 'Not have an experience'}</p>
            </section>

            `
        }
    }

}

customElements.define("worker-component", Employee);
export default Employee;