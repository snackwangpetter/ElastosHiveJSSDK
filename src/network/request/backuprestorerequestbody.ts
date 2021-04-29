import { BackupSaveRequestBody } from "./backupsaverequestbody";

export class BackupRestoreRequestBody extends BackupSaveRequestBody {
    public constructor(credential: string) {
        super(credential);
    }
}
