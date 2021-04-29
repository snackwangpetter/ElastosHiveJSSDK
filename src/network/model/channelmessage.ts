export class ChannelMessage {
    private message: string;
    private time: number;

    public getTime(): number {
        return this.time;
    }

    public setTime(time: number): ChannelMessage {
        this.time = time;
        return this;
    }
}
