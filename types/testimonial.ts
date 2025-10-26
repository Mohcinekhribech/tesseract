export interface Testimonial {
  id: number;
  fullname: string;
  function: string;
  rate: number;
  comments: string;
  createdAt: Date;
}

export interface CreateTestimonialData {
  fullname: string;
  function: string;
  rate: number;
  comments: string;
}

export interface UpdateTestimonialData extends CreateTestimonialData {
  id: number;
}