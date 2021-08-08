<template>
    <div class="container">
        <div class="theTitle">
            <h2><mark style="color: red">My Education history</mark></h2>
            <hr />
        </div>

        <dl class="row">
            <dt class="col-sm-3">Ismailia STEM high school</dt>
            <dd class="col-sm-9">
                <span>Sep.2016 - June.2019</span>
                <p>- President of school council.</p>
                <p>- President of TEDx STEM.</p>
                <p>- Volunteer in UN and AIESEC.</p>
            </dd>

            <dt class="col-sm-3">Kenyon College</dt>
            <dd class="col-sm-9">
                <span>Aug.2019 - May.2023</span>
                <p>- Vice president at African Student Association [ASA].</p>
                <p>- Member of CS club.</p>
                <p>- President at McBride Residence Hall.</p>
            </dd>
        </dl>
    </div>
</template>

<script>
export default {
    name: "Education",
};
</script>

<style scoped>
.theTitle {
    margin: 30px auto;
    width: fit-content;
}
h2 {
    color: blue;
    width: fit-content;
    font-family: monospace;
}
.row {
    line-height: 40px;
}
p {
    color: green;
}
dt {
    color: blue;
    font-family: monospace;
}
</style>
