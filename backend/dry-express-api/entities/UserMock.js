import {EntityMock} from "./index.js";

class UserMock extends EntityMock {
    properties = {
        first_name: "John",
        last_name: "Snow",
        knowledge_base: 0,
    };
}

export default UserMock;