import { ConnectionManager } from "../../connection/connectionmanager";

export class UploadOutputStreamWriter extends OutputStreamWriter {
    private connection: HttpURLConnection;

    public constructor(connection: HttpURLConnection, out: OutputStream) {
        super(out);
        this.connection = connection;
    }

    public close() {
        super.close();
        // In order to get the failed message from response body.
        ConnectionManager.readConnection(connection);
    }
}
