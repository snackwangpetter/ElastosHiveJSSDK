import dayjs from "dayjs";

export class DateUtil {
    public static getCurrentEpochTimeStamp(timeStamp: number): string {
        return dayjs(timeStamp).format("yyyy-MM-dd HH:mm:ss.SSSSSS");
    }
}
