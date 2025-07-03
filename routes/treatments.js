const express = require('express');
const { v4: uuidv4 } = require('uuid');
const { readData, writeData } = require('../utils/utils');

const router = express.Router();

// GET all treatments
router.get('/', (req, res) => {
  const treatments = readData();
  res.json(treatments);
});

// POST a new treatment
router.post('/', (req, res) => {
  const { patientName, treatmentType, treatmentDate, notes } = req.body;

  if (!patientName || !treatmentType || !treatmentDate) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const treatments = readData();
  // the logic that mandorty - Check for duplicate treatment for the same patient on the same date

   const submittedDate = new Date(treatmentDate).toISOString().split('T')[0]; // only date part
  const duplicate = treatments.find(
    (t) =>
      t.patientName === patientName &&
      t.treatmentType === treatmentType &&
      new Date(t.treatmentDate).toISOString().split('T')[0] === submittedDate
  );

  if (duplicate) {
    return res.status(409).json({ error: 'Duplicate treatment for same patient on same date' });
  }

  const newTreatment = {
    id: uuidv4(),
    patientName,
    treatmentType,
    treatmentDate,
    notes: notes || ''
  };

  treatments.push(newTreatment);
  writeData(treatments);

  res.status(201).json(newTreatment);
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    let treatments = readData();
        const index = treatments.findIndex((t) => t.id === id);
    if (index === -1) {
        return res.status(404).json({ error: 'Treatment not found' });
    }

    treatments.splice(index, 1); 
    writeData(treatments);

    res.status(200).json({ message: 'Treatment deleted successfully' });

});

module.exports = router;
