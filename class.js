class Person{
    constructor(name, age, state){
        this.name = name
        this.age = age
        this.state = state
    }
    getName(name){
        console.log(name)
    }
    getAge(age){
        console.log(age)
    }
    getState(state){
        console.log(state)
    }


}
class PostalWorker extends Person{
    getMail(get){
        console.log(`${this.name} is getting mail from ${get}`)
    }
    sendMail(send){
        console.log(`${this.name} is sending mail to ${send}`)
    }
    sortMail(sort){
        console.log(`${this.name} is sorting mail from ${sort}`)
    }
}
class Chef extends Person{
    slice(fruit){
        console.log(`${this.name} is slicing ${fruit}`)
    }
    chop(veg){
        console.log(`${this.name} is chopping ${veg}`)
    }
    cook(food){
        console.log(`${this.name} is cooking ${food}`)
    }

}

const jim = new PostalWorker(`Jim`, 29, `VA`)
const Kim = new PostalWorker(`Kim`, 25, `NY`)

const Dave = new Chef(`Dave`, 35, `TX`)
const Jess = new Chef(`Jess`, 21, `MA`)

jim.getMail(`11111 Arbor green dr`)
jim.sortMail(`11111 Arbor green dr`)
jim.sendMail(`11111 Arbor green dr`)
Kim.getMail(`11111 Arbor green dr`)
Kim.sortMail(`11111 Arbor green dr`)
Kim.sendMail(`11111 Arbor green dr`)

Dave.slice(`apple`)
Dave.chop(`onion`)
Dave.cook(`steak`)
Jess.slice(`apple`)
Jess.chop(`onion`)
Jess.cook(`steak`)
jim.getName(`Norm`)