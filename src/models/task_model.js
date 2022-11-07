import { priority } from "./levels"

export class task {
name="";
description="";
priority=priority.low;
completed=false;

constructor(name,description,priority,completed){
    this.name=name;
    this.description=description;
    this.priority=priority;
    this.completed=completed;
}


}