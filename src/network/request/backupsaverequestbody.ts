export class BackupSaveRequestBody {
    // TODO JAVA @SerializedName("backup_credential")
    private backupCredential: string;

    public BackupSaveRequestBody(backupCredential: string) {
        this.backupCredential = backupCredential;
    }
}
