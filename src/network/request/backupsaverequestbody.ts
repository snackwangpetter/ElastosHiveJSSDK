export class BackupSaveRequestBody {
    // TODO JAVA @SerializedName("backup_credential")
    private backupCredential: string;

    public constructor(backupCredential: string) {
        this.backupCredential = backupCredential;
    }
}
