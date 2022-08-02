


// ----------------------- 콤마 연산자 --------------------------

function add(a, b){
	return a + b 
}
function sub(a, b){
	return a - b 
}

const value = (add(19, 7), sub(9, 5))
console.log(value)

// -------------------------  콤마 연산자 -------------------------

const blogs = ["car is very fast", "i want to go abroad", "i eat breakfast at 7:00 AM", "you are nice !"]
let isValid = false 

function isValidUser(userId){
  return isValid = userId === 'sunrise'
}

function displayBlogsToUser(isValid){
  isValid && blogs.forEach(blog => console.log(blog))
}

const userId = "sunrise"  
const result = (isValidUser(userId), displayBlogsToUser(isValid))
console.log(result)

// ------------------------ 함수 체이닝 -----------------------

const person = {
  name: 'sunrise',
  age: 23,
  city: 'daegu',
  friends: [],
  addFriend: function(friend){
    this.friends.push(friend)
    return this 
  },
  sortByName: function(){
    this.friends.sort((a, b) => {
      return a.name > b.name ? 1: -1 
    })
    return this 
  },
  getFriends: function(){
    console.log(this.friends)
    return this 
  }
}

person
.addFriend({
  name: 'ghibli',
  age: 19,
  city: 'seoul'
})
.sortByName()
.getFriends()

person
.addFriend({
  name: 'hanna',
  age: 29,
  city: 'busan'
})
.sortByName()
.getFriends()

person
.addFriend({
  name: 'daniel',
  age: 32,
  city: 'seoul'
})
.sortByName()
.getFriends()

