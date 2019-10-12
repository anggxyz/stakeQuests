<template>
    <form action="">
                <div class="modal-card" style="width: auto">
                    <header class="modal-card-head">
                        <p class="modal-card-title">Register</p>
                    </header>
                    <section class="modal-card-body">
                        <b-field grouped>
        <b-field label="Full Name" expanded>
            <b-input required></b-input>
        </b-field>
        <b-field label="Email" >
            <b-input required></b-input>
        </b-field>
    </b-field>
                        
                        <b-field label="Company Name">
                            <b-input
                                type="text"
                                >
                            </b-input>
                        </b-field>
                        <b-field label="Discord User ID ">
                            <!-- (All Announcements/Updates will be made via Discord during StackQuest) -->
                            <b-input
                                type="text"
                                placeholder="Please include the last four digits of your discord id"
                                required>
                            </b-input>
                        </b-field>
                        <b-field label="Keybase username">
                            <b-input
                                type="text"
                                placeholder=""
                                >
                            </b-input>
                        </b-field>
<b-field horizontal label="Any request?">
            <b-input type="textarea"></b-input>
        </b-field>
                        <!-- <b-field label="Password">
                            <b-input
                                type="password"
                                password-reveal
                                placeholder="Your password"
                                required>
                            </b-input>
                        </b-field> -->

                        <!-- <b-checkbox>Remember me</b-checkbox> -->
                    </section>
                    <footer class="modal-card-foot">
                        <button class="button" type="button" @click="$parent.close()">Close</button>
                        <button class="button is-info">Submit</button>
                    </footer>
                </div>
            </form>
</template>

<script>
export default {
  name: 'ModalForm'
}
</script>
