"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UploadOutputStream = void 0;
class UploadOutputStream extends OutputStream {
    UploadOutputStream(HttpURLConnection, connection, OutputStream, stream) {
        this.connection = connection;
        this.originalStream = stream;
    }
    write(int, b) { }
}
__decorate([
    Override
], UploadOutputStream.prototype, "void", void 0);
exports.UploadOutputStream = UploadOutputStream;
{
    originalStream.write(b);
}
void write(byte[], bytes);
throws;
IOException;
{
    originalStream.write(bytes);
}
void write(byte[], bytes, int, offset, int, length);
throws;
IOException;
{
    originalStream.write(bytes, offset, length);
}
void flush();
throws;
IOException;
{
    originalStream.flush();
}
void close();
throws;
IOException;
{
    ConnectionManager.readConnection(connection);
    originalStream.close();
}
//# sourceMappingURL=uploadoutputstream.js.map