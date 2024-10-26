import React from 'react';

const User = ({ name, location, email, picture }) => {
  return (
    <div className="random-user">
      <div className="user-image">
        <img src={picture.medium} alt={name.first} />
      </div>
      <div className="user-details">
        <div>
          <strong>Name:</strong> {name.first} {name.last}
        </div>
        <div>
          <strong>Country:</strong> {location.country}
        </div>
        <div>
          <strong>Email:</strong> {email}
        </div>
      </div>
    </div>
  );
};

const UsersList = ({ users }) => {
  return (
    <div className="user-list">
      {users && users.map((user) => <User key={user.login.uuid} {...user} />)}
    </div>
  );
};

export default class AdoptableDogs extends React.Component {
  state = {
    users: [],
    page: 0,
    isLoading: false,
    errorMsg: ''
  };

  componentDidMount() {
    this.loadUsers();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.page !== this.state.page) {
      this.loadUsers();
    }
  }

  loadUsers = async () => {
    try {
      const { page } = this.state;

      this.setState({ isLoading: true });

      const response = await fetch(`https://randomuser.me/api/?page=${page}&results=10`);

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();

      this.setState((prevState) => ({
        users: [...prevState.users, ...data.results],
        errorMsg: ''
      }));
    } catch (error) {
      this.setState({
        errorMsg: 'Error while loading data. Try again later.'
      });
    } finally {
      this.setState({ isLoading: false });
    }
  };
  
  loadMore = () => {
    this.setState((prevState) => ({
      page: prevState.page + 1
    }));
  };

  render() {
    const { users, isLoading, errorMsg } = this.state;

    return (
      <div className="main-section">
        <UsersList users={users} />
        {errorMsg && <p className="errorMsg">{errorMsg}</p>}
        <div className="load-more">
          <button onClick={this.loadMore} className="btn-grad">
            {isLoading ? 'Loading...' : 'Load More'}
          </button>
        </div>
      </div>
    );
  }
}

// export default function MyButton() {
//   return (
//     <button>I'm a button</button>
//   );
// }

// export default function ReactSlickSlider({ items }: { items: Item[] }) {
//   return (
//     <div>
//       TESTING
//     </div>
//   );
// }
