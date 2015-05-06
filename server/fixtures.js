
if (Schools.find().count() === 0) {
  Schools.insert(
    {school_name: "Quail Run" });
  Schools.insert(
    {school_name: "Live Oak" });
}

if (Classes.find().count() === 0) {
 var sch1 = Schools.findOne ({school_name: "Quail Run"});
  Classes.insert(
    {school_id: sch1._id ,
    class_name: "D3"});
  Classes.insert(
    {school_id: sch1._id,
    class_name: "B3"});
 var sch2 = Schools.findOne ({school_name: "Live Oak"});
  Classes.insert(
    {school_id: sch2._id,
    class_name: "LO1"});
  Classes.insert(
    {school_id: sch2._id ,
    class_name: "LO2"});
  
} 

if (Students.find().count() === 0) {
 var c1 = Classes.findOne ({class_name: "D3"});
  Students.insert({
    class_id: c1._id ,
    first_name: "Kenshin",
    last_name: "Lin"});
  Students.insert({
    class_id: c1._id ,
    first_name: "Mark",
    last_name: "Mar"});
  Students.insert({
    class_id: c1._id ,
    first_name: "Callen",
    last_name: "Liu"});
 var c2 = Classes.findOne ({class_name: "B3"});
 Students.insert({
    class_id: c2._id ,
    first_name: "Jimmy",
    last_name: "Hoffa"});
  Students.insert({
    class_id: c2._id ,
    first_name: "Mickey",
    last_name: "Mouse"});
  Students.insert({
     class_id: c2._id ,
     first_name: "Donald",
     last_name: "Duck"});
 
}

if (Parents.find().count() === 0) {
  var s1 = Students.findOne ({first_name: "Kenshin"});
  Parents.insert({
    student_id: s1._id ,
    first_name: "Mommy",
    last_name: "Lin",
    phone: "925-232-1111",
    email: "squawked@yahoo.com",
    approved_volunteer: true });
  var s2 = Students.findOne ({first_name: "Mark"});
  Parents.insert({
    student_id: s2._id ,
    first_name: "Mommy",
    last_name: "Mar",
    phone: "925-222-1111",
    email: "maggie@yahoo.com",
    approved_volunteer: true });
  Parents.insert({
    student_id: s2._id ,
    first_name: "Daddy",
    last_name: "Mar",
    phone: "925-222-1111",
    email: "james@yahoo.com",
    approved_volunteer: true });
  var s3 = Students.findOne ({first_name: "Callen"});
  Parents.insert({
    student_id: s3._id ,
    first_name: "Mommy",
    last_name: "Liu",
    phone: "925-222-1111",
    email: "xx@yahoo.com",
    approved_volunteer: false });
  Parents.insert({
    student_id: s3._id ,
    first_name: "Father",
    last_name: "Liu",
    phone: "925-222-1111",
    email: "james@yahoo.com",
    approved_volunteer: true });
}

if (FieldTrips.find().count() === 0) {
  var c1 = Classes.findOne ({class_name: "D3"});
  FieldTrips.insert({
    class_id: c1._id,
    name: "Chevy's",
    date: "5/1/2015"}
  );
  FieldTrips.insert({
    class_id: c1._id,
    name: "Danville Theater",
    date: "11/1/2014"}
  );
}

if (Carpools.find().count() === 0) {
  var ft = FieldTrips.findOne ({name: "Chevy's"});
  var p1 = Parents.findOne({first_name: "Mommy", last_name: "Mar"});
  var p2 = Parents.findOne({first_name: "Father"});
  
  var s1 = Students.findOne({first_name: "Mark"});
  var s2 = Students.findOne({first_name: "Kenshin"});
  var s3 = Students.findOne({first_name: "Callen"});
  
  Carpools.insert({
    fieldTrip_id: ft._id,
    parent_id: p1._id,
    student_id: s1._id}
  );
  Carpools.insert({
    fieldTrip_id: ft._id,
    parent_id: p1._id,
    student_id: s2._id}
  );
  Carpools.insert({
    fieldTrip_id: ft._id,
    parent_id: p2._id,
    student_id: s3._id}
  );


}
  
 