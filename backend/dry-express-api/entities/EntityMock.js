class EntityMock {
    properties = {
        property1: "value1",
        property2: "value2",
        property3: "value3",
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

export default EntityMock;