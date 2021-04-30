"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Condition = void 0;
class Condition {
    constructor(name, type, body) {
        this.name = name;
        this.type = type;
        this.body = body;
    }
}
exports.Condition = Condition;
Condition.TYPE_AND = "and";
Condition.TYPE_OR = "or";
Condition.TYPE_QUERY_HAS_RESULTS = "queryHasResults";
//# sourceMappingURL=condition.js.map