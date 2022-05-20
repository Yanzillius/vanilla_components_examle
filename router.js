import { userView, usersListView } from "./views";

const $root = document.getElementById('root');
const routes = {
  'user': userView,
  'usersList': usersListView,
}

document.addEventListener('hashchange', onHashChange)

function onHashChange(event) {
  //get path from event, url, etc.
  const path = 'user';
  //maybe some needed params
  const param = 'some-user-id';
  const layout = routes[path].render(param);

  $root.innerHTML = layout;
}
