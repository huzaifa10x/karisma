import { writable } from 'svelte/store';

function createAppointmentStore() {
    const { subscribe, set } = writable(false);

    return {
        subscribe,
        open: () => set(true),
        close: () => set(false)
    };
}

export const appointmentModal = createAppointmentStore();