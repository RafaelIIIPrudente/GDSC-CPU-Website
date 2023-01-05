import { Request, Response } from "express";
import Events from "../models/eventsModel";
import { Op } from "sequelize";
import Users from "../models/userModel";

export const getEvents = async (req: Request, res: Response) => {
  try {
    let response;
    if (req.role === "admin") {
      response = await Events.findAll({
        attributes: [
          "uuid",
          "title",
          "date",
          "eventLead",
          "eventDescription",
          "userId",
        ],
        include: [
          {
            model: Users,
            attributes: ["name", "email"],
          },
        ],
      });
    } else {
      response = await Events.findAll({
        attributes: ["uuid", "title", "date", "eventLead"],
        where: {
          userId: req.userId,
        },
        include: [
          {
            model: Users,
            attributes: ["name", "email"],
          },
        ],
      });
    }
    res.status(200).json(response);
  } catch (error: any) {
    res.status(500).json({ msg: error.message });
  }
};

export const getEventsById = async (req: Request, res: Response) => {
  try {
    const events = await Events.findOne({
      where: {
        uuid: req.params.id,
      },
    })
      .catch((e) => {
        console.error(e.message);
      })
      .then((user) => {
        return user?.get({
          plain: true,
        });
      });

    if (!events)
      return res.status(404).json({ msg: "Event here is not found" });
    let response;
    if (req.role === "admin") {
      response = await Events.findOne({
        attributes: 
        [
        "uuid", 
        "title",
        "date",
        "eventLead",
        "eventDescription",
      ],
        where: {
          id: events.id,
        },
        include: [
          {
            model: Users,
            attributes: ["name", "email"],
          },
        ],
      })
        .catch((e) => {
          console.error(e.message);
        })
        .then((user) => {
          return user?.get({
            plain: true,
          });
        });
    } else {
      response = await Events.findOne({
        attributes: 
        [
        "uuid",  
        "title",
        "date",
        "eventLead",
        "eventDescription",
      ],
        where: {
          [Op.and]: [{ id: events.id }, { userId: req.userId }],
        },
        include: [
          {
            model: Users,
            attributes: ["name", "email"],
          },
        ],
      });
    }
    res.status(200).json(response);
  } catch (error: any) {
    res.status(500).json({ msg: error.message });
  }
};

export const createEvents = async (req: Request, res: Response) => {
  const { title, date, eventLead, eventDescription } = req.body;
  try {
    await Events.create({
      title: title,
      date: date,
      eventLead: eventLead,
      eventDescription: eventDescription,
      userId: req.userId  
    });
    res.status(201).json({ msg: "Events Created Successfuly" });
  } catch (error: any) {
    res.status(500).json({ msg: error.message });
  }
};

export const updateEvents = async (req: Request, res: Response) => {
  try {
    const product = await Events.findOne({
      where: {
        uuid: req.params.id,
      },
    })
      .catch((e) => {
        console.error(e.message);
      })
      .then((user) => {
        return user?.get({
          plain: true,
        });
      });

    if (!product) return res.status(404).json({ msg: "Event not Found" });
    const { name, price } = req.body;
    if (req.role === "admin") {
      await Events.update(
        { name, price },
        {
          where: {
            id: product.id,
          },
        }
      );
    } else {
      if (req.userId !== product.userId)
        return res.status(403).json({ msg: "Forbidden access" });
      await Events.update(
        { name, price },
        {
          where: {
            [Op.and]: [{ id: product.id }, { userId: req.userId }],
          },
        }
      );
    }
    res.status(200).json({ msg: "Event updated successfuly" });
  } catch (error: any) {
    res.status(500).json({ msg: error.message });
  }
};

export const deleteEvents = async (req: Request, res: Response) => {
  try {
    const product = await Events.findOne({
        where:{
            uuid: req.params.id
        }
    }).catch((e) => {
      console.error(e.message);
    }).then((user) => {
      return user?.get({
        plain: true
      })
    });

    if(!product) return res.status(404).json({msg: "Event not Found"});
    const {name, price} = req.body;
    if(req.role === "admin"){
        await Events.destroy({
            where:{
                id: product.id
            }
        });
    }else{
        if(req.userId !== product.userId) return res.status(403).json({msg: "Forbidden access"});
        await Events.destroy({
            where:{
                [Op.and]:[{id: product.id}, {userId: req.userId}]
            }
        });
    }
    res.status(200).json({msg: "Event deleted successfuly"});
} catch (error: any) {
    res.status(500).json({msg: error.message});
}
};
