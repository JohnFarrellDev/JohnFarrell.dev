import { State } from "..";
import { FaceType } from "../../Components/GameTracking/GameTracking";


export const switchFaceType = (state: State) => {
    state.faceType = state.faceType === FaceType.Human ? FaceType.Cat :  FaceType.Human;
}