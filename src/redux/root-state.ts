export type RootState = Readonly<{
    message: string
}>;

export const INITIAL_STATE: RootState = {
    message: 'Hello world'
};
