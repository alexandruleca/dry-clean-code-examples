class UserMock {
    properties = {
        first_name: "John",
        last_name: "Snow",
        knowledge_base: 0,
    };

    get(id) {
        return this.properties;
    }

    update(id, partialPayload = {}) {
        this.properties = {...this.properties, ...partialPayload};
        return this.properties;
    }

    delete(id) {
        return true;
    }
}

export default UserMock;