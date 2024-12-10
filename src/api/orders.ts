import prisma from '../lib/db';
import { sendOrderNotification, sendCustomOrderNotification, sendContactNotification } from '../lib/email';

export const createOrder = async (orderData: any) => {
  try {
    const order = await prisma.order.create({
      data: orderData,
    });
    await sendOrderNotification(orderData);
    return order;
  } catch (error) {
    console.error('Error creating order:', error);
    throw error;
  }
};

export const createCustomOrder = async (orderData: any) => {
  try {
    const order = await prisma.customOrder.create({
      data: orderData,
    });
    await sendCustomOrderNotification(orderData);
    return order;
  } catch (error) {
    console.error('Error creating custom order:', error);
    throw error;
  }
};

export const createContact = async (contactData: any) => {
  try {
    const contact = await prisma.contact.create({
      data: contactData,
    });
    await sendContactNotification(contactData);
    return contact;
  } catch (error) {
    console.error('Error creating contact:', error);
    throw error;
  }
};