import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userInfo: {
                login: "Dummy",
                created_at: "Dummy",
                type: "Dummy",
                avatar_url: "Dummy"
            },
        }
    }

    async componentDidMount() {
        const data = await fetch("https://api.github.com/users/rohit161996");
        const json = await data.json();
        this.setState({
            userInfo: json,
        });
    }

    componentDidUpdate() {
    }

    componentWillUnmount() {
    }

    render() {
        const { login, created_at, type, avatar_url } = this.state.userInfo;

        return (
            <div className="bg-white rounded-lg shadow p-4 max-w-md mx-auto text-center">
                <img
                    src={avatar_url}
                    alt="User Avatar"
                    className="w-24 h-24 rounded-full mx-auto mb-4"
                />
                <h1 className="text-lg font-medium">
                    Login Id: {login}
                </h1>
                <h2 className="text-sm text-gray-500">
                    Created At: {created_at}
                </h2>
                <h4 className="text-sm text-gray-500">
                    Type: {type}
                </h4>
            </div>
        );
    }
}

export default UserClass;