/**
 * Represents an available time slot for booking.
 */
export interface TimeSlot {
  /**
   * The start time of the time slot (e.g., "09:00").
   */
  startTime: string;
  /**
   * The end time of the time slot (e.g., "10:00").
   */
  endTime: string;
}

/**
 * Represents an appointment booking request.
 */
export interface BookingRequest {
  /**
   * The date for the appointment (YYYY-MM-DD).
   */
  date: string;
  /**
   * The preferred time slot.
   */
  timeSlot: TimeSlot;
  /**
   * Whether the service is at home or in salon.
   */
  homeService: boolean;
  /**
   * The address for home service, if applicable.
   */
  address?: string;
}

/**
 * Represents a confirmation of a booking.
 */
export interface BookingConfirmation {
  /**
   * A unique identifier for the booking.
   */
  bookingId: string;
  /**
   * The date of the appointment (YYYY-MM-DD).
   */
  date: string;
  /**
   * The confirmed time slot.
   */
  timeSlot: TimeSlot;
  /**
   * The total cost of the service.
   */
  totalCost: number;
}

/**
 * Asynchronously retrieves available time slots for a given date.
 *
 * @param date The date for which to retrieve time slots (YYYY-MM-DD).
 * @returns A promise that resolves to an array of available TimeSlot objects.
 */
export async function getAvailableTimeSlots(date: string): Promise<TimeSlot[]> {
  // TODO: Implement this by calling an API.

  return [
    { startTime: '09:00', endTime: '10:00' },
    { startTime: '10:00', endTime: '11:00' },
    { startTime: '11:00', endTime: '12:00' },
  ];
}

/**
 * Asynchronously books an appointment.
 *
 * @param bookingRequest The details of the booking request.
 * @returns A promise that resolves to a BookingConfirmation object.
 */
export async function bookAppointment(bookingRequest: BookingRequest): Promise<BookingConfirmation> {
  // TODO: Implement this by calling an API.

  return {
    bookingId: '12345',
    date: bookingRequest.date,
    timeSlot: bookingRequest.timeSlot,
    totalCost: 50,
  };
}
