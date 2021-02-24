function isTouching(object1,object2){
    console.log("test")
    if (object1.body.position.x - object2.body.position.x <= object1.width/2 + object2.width/2 &&
      object2.body.position.x - object1.body.position.x <= object1.width/2 + object2.width/2  && 
      object1.body.position.y - object2.body.position.y <= object1.height/2 +object2.height/2 &&
      object2.body.position.y  - object1.body.position.y <= object1.height/2 +object2.height/2 ){
      return true

    }
    else{
      return false
    } 
  
  }

  