import DataService from "./services/DataService";
import { userTemplate } from "./templates/UserTemplate";

class BaseView {
    constructor(DataService) {
        this.DataService = DataService;
    }

    render(param) {
        const data = this.getData(param);
        return this.template(data);
    }

    getData() {
        return '';
    }

}

class UserView extends BaseView {
    constructor(DataService) {
        super(DataService)
        this.template = userTemplate
    }

    getData(userId) {
        return this.DataService.getUser(userId)
    }
}

class UsersListView extends BaseView {
    constructor(DataService) {
        super(DataService)
        this.template = userTemplate
    }

    getData() {
        return this.DataService.getAllUsers()
    }

    render() {
        const allUsers = this.getData();
        let usersListLayout = ''
        for (let i = 0; i < allUsers.length; i++) {
            const user = allUsers[i];
            usersListLayout += this.template(user)
        }
        return `<div>${usersListLayout}</div>`;
    }
}

export const userView = new UserView(DataService);
export const usersListView = new UsersListView(DataService);
