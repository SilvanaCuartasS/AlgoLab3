(()=>{"use strict";var e;!function(e){e.image="image",e.name="name",e.uid="uid",e.age="age",e.gender="gender",e.area="area",e.position="position",e.timeincompany="timeincompany",e.experience="experience"}(e||(e={}));class a extends HTMLElement{static get observedAttributes(){return Object.keys(e)}constructor(){super(),this.attachShadow({mode:"open"})}attributeChangedCallback(a,t,o){switch(a){case e.uid:this.uid=o?Number(o):void 0;break;case e.age:this.age=o?Number(o):void 0;break;case e.timeincompany:this.timeincompany=o?Number(o):void 0;break;case e.experience:this.experience=o?Number(o):void 0;break;default:this[a]=o}this.render()}connectedCallback(){this.render()}render(){this.shadowRoot&&(this.shadowRoot.innerHTML=`\n            <section>\n            <img src="${this.image||"No hay imagen"}" alt="imagen de: ${this.name}">\n            <h1>${this.name||"Not have a name"}</h1>\n            <p>ID for one our users: ${this.uid||"Not have an ID"}</p>\n            <p>Age: ${this.age||"Not have an age"}</p>\n            <p>Gender: ${this.gender||"Not have a gender"}</p>\n            <p>Area: ${this.area||"Not have an area"}</p>\n            <p>Position: ${this.position||"Not have a position"}</p>\n            <p>Time in company: ${this.timeincompany||"Not have a time in company"}</p>\n            <p>Experience: ${this.experience||"Not have an experience"}</p>\n            </section>\n\n            `)}}customElements.define("worker-component",a);const t=[{id:1,name:"Maria Lopez",image:"https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",age:32,gender:"Female",jobDetails:{area:"Sales",position:"Sales Manager",timeInCompany:6,experience:8}},{id:2,name:"Emily Johnson",image:"https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",age:28,gender:"Female",jobDetails:{area:"Human Resources",position:"HR Specialist",timeInCompany:3,experience:5}},{id:3,name:"John Smith",image:"https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",age:35,gender:"Male",jobDetails:{area:"Finance",position:"Financial Analyst",timeInCompany:4,experience:7}},{id:4,name:"Michael Brown",image:"https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",age:40,gender:"Male",jobDetails:{area:"IT",position:"Software Developer",timeInCompany:8,experience:12}},{id:5,name:"Sophia Martinez",image:"https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",age:27,gender:"Female",jobDetails:{area:"Marketing",position:"Marketing Coordinator",timeInCompany:2,experience:4}},{id:6,name:"Isabella Garcia",image:"https://images.pexels.com/photos/2804282/pexels-photo-2804282.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",age:31,gender:"Female",jobDetails:{area:"Customer Service",position:"Customer Support Specialist",timeInCompany:4,experience:6}},{id:7,name:"William Taylor",image:"https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&w=600",age:33,gender:"Male",jobDetails:{area:"Operations",position:"Operations Manager",timeInCompany:5,experience:9}},{id:8,name:"Ethan Wilson",image:"https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",age:29,gender:"Male",jobDetails:{area:"Research and Development",position:"Research Scientist",timeInCompany:3,experience:5}},{id:9,name:"Olivia Anderson",image:"https://images.pexels.com/photos/5905902/pexels-photo-5905902.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",age:36,gender:"Female",jobDetails:{area:"Quality Assurance",position:"QA Analyst",timeInCompany:7,experience:10}},{id:10,name:"Emma Brown",image:"https://images.pexels.com/photos/19130891/pexels-photo-19130891/free-photo-of-moda-mujer-modelo-camisa.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",age:30,gender:"Female",jobDetails:{area:"Finance",position:"Financial Advisor",timeInCompany:6,experience:8}},{id:11,name:"James Martinez",image:"https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",age:25,gender:"Male",jobDetails:{area:"Sales",position:"Sales Representative",timeInCompany:2,experience:3}},{id:12,name:"Alexander Rodriguez",image:"https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",age:38,gender:"Male",jobDetails:{area:"Operations",position:"Operations Analyst",timeInCompany:9,experience:11}},{id:13,name:"Ava Wilson",image:"https://images.pexels.com/photos/14541208/pexels-photo-14541208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",age:26,gender:"Female",jobDetails:{area:"Marketing",position:"Marketing Manager",timeInCompany:4,experience:6}},{id:14,name:"Mia Perez",image:"https://images.pexels.com/photos/5878568/pexels-photo-5878568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",age:29,gender:"Female",jobDetails:{area:"Human Resources",position:"HR Manager",timeInCompany:5,experience:7}},{id:15,name:"Daniel Thompson",image:"https://images.pexels.com/photos/2232981/pexels-photo-2232981.jpeg",age:34,gender:"Male",jobDetails:{area:"IT",position:"IT Manager",timeInCompany:7,experience:9}}];class o extends HTMLElement{constructor(){super(),this.arrayEmployee=[],this.attachShadow({mode:"open"}),t.forEach((a=>{const t=this.ownerDocument.createElement("worker-component");t.setAttribute(e.image,a.image),t.setAttribute(e.name,a.name),t.setAttribute(e.uid,`${Number(a.id)}`),t.setAttribute(e.age,`${Number(a.age)}`),t.setAttribute(e.gender,a.gender),t.setAttribute(e.area,a.jobDetails.area),t.setAttribute(e.position,a.jobDetails.position),t.setAttribute(e.timeincompany,`${a.jobDetails.timeInCompany}`),t.setAttribute(e.experience,`${a.jobDetails.experience}`),this.arrayEmployee.push(t),console.log(this.arrayEmployee)}))}connectedCallback(){this.render()}render(){this.shadowRoot&&(this.shadowRoot.innerHTML="\n            <h1>Haloooo</h1>\n            ",this.arrayEmployee.forEach((e=>{var a;null===(a=this.shadowRoot)||void 0===a||a.appendChild(e)})))}}customElements.define("app-container",o)})();