const express = require("express");
const checklistDependentRoute = express.Router();
const simpleRouter = express.Router();
const Checklist = require("../models/checklist");
const Task = require("../models/task");

checklistDependentRoute.get("/:id/tasks/new", async (req, res) => {
  try {
    let task = new Task();
    res
      .status(200)
      .render("tasks/new", { checklistId: req.params.id, task: task });
  } catch (error) {
    res
      .status(422)
      .render("pages/error", { errors: "Erro ao carregar o formulário" });
  }
});

checklistDependentRoute.post("/:id/tasks", async (req, res) => {
  const { name } = req.body.task;
  const task = new Task({ name, checklist: req.params.id });

  try {
    await task.save();
    const checklist = await Checklist.findById(req.params.id);
    checklist.tasks.push(task);
    await checklist.save();
    res.redirect(`/checklists/${req.params.id}`);
  } catch (error) {
    const errors = error.errors;
    res.status(422).render("tasks/new", {
      task: { ...task, errors },
      checklistId: req.params.id,
    });
  }
});

simpleRouter.delete("/:id", async (req, res) => {
  try {
    let task = await Task.findByIdAndDelete(req.params.id);
    let checklist = await Checklist.findById(task.checklist);
    let taskToRemove = checklist.tasks.indexOf(task._id);
    checklist.tasks.slice(taskToRemove);
    checklist.save();
    res.redirect(`/checklists/${checklist._id}`);
  } catch (error) {
    res
      .status(422)
      .render("pages/error", { errors: "Erro ao excluir uma tarefa." });
  }
});

simpleRouter.put("/:id", async (req, res) => {
  let task = await Task.findById(req.params.id);
  try {
    task.set(req.body.task);
    await task.save();
    res.status(200).json({ task });
  } catch (error) {
    let errors = error.errors;
    res.status(422).json({ task: { ...errors } });
  }
});

module.exports = {
  checklistDependent: checklistDependentRoute,
  simple: simpleRouter,
};