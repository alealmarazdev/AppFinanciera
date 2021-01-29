export default{
  async getUsers() {
    const response = await fetch('http://localhost:8081/users');

    const { payload } = await response.json();

    const list = payload.users.map((user) => {
      const {       
        fullName: name,
        _id: id,
      } = user;

      return {
        name,
        id,
      };
    });
 return list
  },
  async deleteUser(id) {
    const response = await fetch(`http://localhost:8081/users/${id}`, {
      method: 'DELETE',
    });

    const { succes } = await response.json();
    console.log(succes)
    return succes
  },
  async isBloquedForum(id) {
    const response = await fetch(`http://localhost:8081/users/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        isBloquedForum: true }),
    });

    const { succes } = await response.json();
    console.log(succes)
    return succes

  },
  async newUser(userInfo) {
    const response = await fetch('http://localhost:8081/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: userInfo.email,
        fullName: userInfo.fullName,
        userName: userInfo.userName,
        age: userInfo.age,
        gender: userInfo.gender,
        createdAt: userInfo.createdAt,
        isActived: userInfo.isActived,
        isBloquedForum: userInfo.isBloquedForum,
        lastLogin: userInfo.lastLogin,
        ocupation: userInfo.ocupation,
        city: userInfo.city,
        score: userInfo.score,
        isAdmin: userInfo.isAdmin,
      }),
    });

    const { succes } = await response.json();

    return succes
  },
  async getUser (userId){
    const response = await fetch(`http://localhost:8081/users/${userId}`);

    const { payload } = await response.json();

    const { user } = payload;

    return user
  },
  async updateUser(userId, body) {
    const response = await fetch(`http://localhost:8081/users/${userId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });

    const { succes } = await response.json();
    return succes
  },
  async getScore (userId, userScore){
    const response = await fetch(`http://localhost:8081/users/${userId}/${userScore}`);

    const { payload } = await response.json();

    const { user } = payload;

    return user.score
  }

}