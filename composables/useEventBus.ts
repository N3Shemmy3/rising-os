import mitt from "mitt";

interface Modal {
	name: string;
	visible: boolean;
}
type Events = {
	"modal:event": Modal;
	"event:mouseover": boolean;
	"onDrawerVisCh": boolean;
};

const emitter = mitt<Events>();

export const useEvent = emitter.emit;
export const useListen = emitter.on;

/*
fire an event
useEvent('user:registered', { name: 'Israel'})
// capture
useListen('user:registered', (user) => console.log(user))
*/
