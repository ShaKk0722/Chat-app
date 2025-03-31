import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";


const sendMessage = async (req, res) => {
    try {
        const { message } = req.body;
        const { userId: receiverId } = req.params;
        const senderId = req.user._id;

        let conversation = await Conversation.findOne({
            participants: { $all: [senderId, receiverId] },
        })
      
        if (!conversation) {
            conversation = await Conversation.create({
                participants: [senderId, receiverId],
            });
        }
      
        const newMessage = new Message({
            senderId,
            receiverId,
            message,
        });

        if (newMessage) {
            conversation.message.push(newMessage._id);
        }
        await Promise.all([conversation.save(), newMessage.save()]);
        res.status(201).json(newMessage);

    } catch (error) {
        console.error("Error sending message:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};


const getMessages = async (req, res) => {
    try {
        const { userId: userToChatId } = req.params;
        const senderId = req.user._id;

        const conversation = await Conversation.findOne({
            participants: { $all: [senderId, userToChatId] },
        }).populate("message");

        if (!conversation) {
            return res.status(200).json([]);
        }
        const messages = conversation.messages;
        
        res.status(200).json(conversation.message);
    } catch (error) {
        console.error("Error getting message:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};
export {sendMessage, getMessages } ;